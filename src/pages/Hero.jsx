import axios from 'axios';
import md5 from 'md5';
import {useEffect} from 'react';
import {Link, useLoaderData, useNavigate} from 'react-router-dom';
import {useQuery} from 'react-query';
import rateFill from '../assets/review/Path@2x.png';
import rateEmpty from '../assets/review/Path Copy 6@2x.png';
import {useState} from 'react';
import Wrapper, {Navbar} from './styles/hero'
import SearchForm from '../components/SearchForm';

import logo from '../assets/logo/Group.png'
import book from '../assets/icones/book/Group.png'
import video from '../assets/icones/video/Shape.png'
import fillHeart from '../assets/icones/heart/Path Copy 7@2x.png'

// CONSTANTES PARA A API DA MARVEL
const MARVEL_API_URL = 'https://gateway.marvel.com/v1/public/characters/';
const TIME = Number(new Date());
const HASH = md5(`${TIME}${import.meta.env.VITE_PRIVATE_KEY}${import.meta.env.VITE_PUBLIC_KEY}`);

// FUNÇÃO PARA OBTER AS AVALIAÇÕES SALVAS NO LOCAL STORAGE
const getRatingsFromLocalStorage = () => {
  const storedRating = localStorage.getItem('ratings');
  return storedRating ? JSON.parse(storedRating) : {};
};

// LOADER FUNCTION PARA OBTENÇÃO DOS DADOS DO HERÓI
export const loader = async ({params}) => {
  const {id} = params;
  const {data} = await axios.get(
    `${MARVEL_API_URL}${id}?ts=${TIME}&apikey=${import.meta.env.VITE_PUBLIC_KEY}&hash=${HASH}`
  );
  return {data, id};
};

const Hero = () => {

  // OBTÉM O ID E OS DADOS DO HERÓI DO LOADER DATA
  const {id, data} = useLoaderData();
  const {results} = data.data;

  // ESTADO PARA ARMAZENAR AS AVALIAÇÕES DOS HERÓIS
  const [ratings, setRatings] = useState(getRatingsFromLocalStorage());
  const [searchFormColor, setSearchFormColor] = useState('white');



  // FUNÇÃO PARA LIDAR COM CLIQUES NA AVALIAÇÃO
  const handleRateClick = (id, index) => {
    setRatings((prevRatings) => {
      const newRatings = {...prevRatings};
      // Se a estrela clicada estiver igual à avaliação atual, então desmarcamos (empty)
      if (newRatings[id] === index) {
        newRatings[id] = index - 1;

      } else {
        // Caso contrário, atualizamos a avaliação para o valor correspondente ao índice da estrela clicada (full)
        newRatings[id] = index;
      }
      return newRatings;
    });
  };

  // ATUALIZA AS AVALIAÇÕES NO LOCAL STORAGE QUANDO O ESTADO "ratings" FOR ALTERADO
  useEffect(() => {
    localStorage.setItem('ratings', JSON.stringify(ratings));
  }, [ratings]);

  // FUNÇÃO ASSÍNCRONA PARA OBTER OS COMICS DO HERÓI
  const getComics = async (id) => {
    const response = await axios.get(
      `${MARVEL_API_URL}${id}/comics?ts=${TIME}&apikey=${import.meta.env.VITE_PUBLIC_KEY}&hash=${HASH}&orderBy=-focDate&limit=10`
    );
    return response.data.data.results;
  };

  // REACT QUERY PARA OBTENÇÃO DOS COMICS DO HERÓI
  const {
    data: comicsData,
    isLoading: isLoadingComics,
    isError: isErrorComics,
  } = useQuery(['comics', id], () => getComics(id));

  return (
    <section className='hero-page'>
      <Navbar>
        <div className="navbar">
          <img src={logo} alt="" />
          <div className="search">
            <SearchForm color={searchFormColor} />
          </div>
          <Link to='/'>
            Home
          </Link>
        </div>
      </Navbar>

      <Wrapper>
        {results.map((item) => {
          const {thumbnail, description, name, series, comics} = item;
          return (

            <div key={id}>
              <div className="hero-info">
                <div className="hero-description">
                  <div className="title">
                    <h1>{name}</h1>
                    <img src={fillHeart} alt="" />
                  </div>
                  <p className='description'>{description}</p>
                  <div className="info">
                    <div className="info-item">
                      <h4>Quadrinhos</h4>
                      <div className="icon">
                        <img src={book} alt="" />
                        <p>{comics.available}</p>
                      </div>
                    </div>
                    <div className="info-item">
                      <h4>Filmes</h4>
                      <div className="icon">
                        <img src={video} alt="" />
                        <p>{series.available}</p>
                      </div>
                    </div>
                  </div>
                  <div className="rating-container">
                    <p>Rating: </p>
                    {[1, 2, 3, 4, 5].map((index) => (
                      <img
                        key={index}
                        onClick={() => handleRateClick(id, index)}
                        src={index <= (ratings[id] || 0) ? rateFill : rateEmpty}
                        alt=""
                      />
                    ))}
                  </div>
                </div>

                <img
                  className='img'
                  src={`${thumbnail.path}/standard_xlarge.${thumbnail.extension}`}
                  alt=""
                />
              </div>
              <h2>Ultimos lançamentos</h2>

              {isLoadingComics ? (
                <div className="loading"></div>
              ) : isErrorComics ? (
                <div>Alguma coisa deu errado !</div>
              ) : (
                <section className='comics'>
                  {comicsData.map((comic) => (
                    <div key={comic.id}>
                      <img
                        src={`${comic.thumbnail.path}/standard_xlarge.${comic.thumbnail.extension}`}
                        alt=""
                      />
                      <div>{comic.title}</div>
                    </div>
                  ))}
                </section>

              )}
            </div>
          );
        })}
        <footer></footer>
      </Wrapper>
    </section >
  );
};

export default Hero;
