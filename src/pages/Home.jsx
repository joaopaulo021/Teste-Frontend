import axios from 'axios';
import md5 from 'md5';
import Characters from '../components/Characters';
import {useLoaderData, useNavigation} from 'react-router-dom';
import {useState} from 'react';
import {useQuery} from 'react-query';
import SearchForm from '../components/SearchForm';
import Wrapper from './styles/home'

import logo from '../assets/logo/Group.png'

import hero from '../assets/icones/heroi/noun_Superhero_2227044@2x.png'
import toggleOn from '../assets/toggle/Group 2@2x.png'
import toggleOff from '../assets/toggle/Group 6@2x.png'
import emptyHeart from '../assets/icones/heart/Path Copy 2@2x.png'
import fillHeart from '../assets/icones/heart/Path Copy 7@2x.png'
import {useFavorites} from '../context/FavoriteContext';

// CONSTANTES PARA A API DA MARVEL
const MARVEL_API_URL = 'https://gateway.marvel.com/v1/public/characters?';
const TIME = Number(new Date());
const HASH = md5(`${TIME}${import.meta.env.VITE_PRIVATE_KEY}${import.meta.env.VITE_PUBLIC_KEY}`);
const LIMIT = 20;

// FUNÇÃO PARA OBTER A URL DE BUSCA COM BASE NOS PARÂMETROS
const getSearchUrl = (searchTerm, offset, ascending) => {
  const orderBy = ascending ? 'name' : '-name';
  const params = new URLSearchParams({
    ts: TIME,
    apikey: import.meta.env.VITE_PUBLIC_KEY,
    hash: HASH,
    offset,
    limit: LIMIT,
    orderBy,
  });

  if (searchTerm) {
    params.append('nameStartsWith', searchTerm);
  }

  return `${MARVEL_API_URL}${params.toString()}`;
};

// FUNÇÃO ASSÍNCRONA PARA BUSCAR HERÓIS NA API DA MARVEL
const fetchHeroes = async (searchTerm, offset, ascending) => {
  const url = getSearchUrl(searchTerm, offset, ascending);
  const response = await axios.get(url);
  return response.data.data.results;
};

// FUNÇÃO DE PAGINAÇÃO PARA BUSCAR HERÓIS COM BASE NO OFFSET
const pagination = (offset) => {
  return async (searchTerm) => {
    const url = getSearchUrl(searchTerm, offset);
    const response = await axios.get(url);
    return response.data.data.results;
  };
};

const Home = () => {
  const {searchTerm} = useLoaderData();

  const [searchFormColor, setSearchFormColor] = useState('#fdecec');

  // ESTADOS PARA CONTROLE DE PAGINAÇÃO E ORDENAÇÃO
  const [ascending, setAscending] = useState(true);
  const [offset, setOffset] = useState(0);
  const [toggle, setToggle] = useState(false)

  const {favoritesList, showFavorites, setShowFavorites} = useFavorites();

  // OBTÉM OS HERÓIS DA API UTILIZANDO REACT QUERY
  const {data: heroes, isLoading, isError} = useQuery(
    ['search', searchTerm, offset, ascending],
    () => fetchHeroes(searchTerm, offset, ascending)
  );

  // FUNÇÕES PARA CONTROLE DE PAGINAÇÃO E ORDENAÇÃO
  const handlePreviousPage = () => {
    if (offset >= LIMIT) {
      setOffset(offset - LIMIT);
    }
  };

  const handleNextPage = () => {
    setOffset(offset + LIMIT);
  };

  const handleSortAZ = () => {
    setAscending(true);
    setOffset(0);
  };

  const handleSortZA = () => {
    setAscending(false);
    setOffset(0);
  };

  return (
    <>
      <Wrapper>

        <img className='logo' src={logo} alt="" />
        <h4>EXPLORE O UNIVERSO</h4>
        <p>mergulhe no dominio deslumbrante de todos os personagens classicos que você ama e aqueles que voce descobrira em breve !!</p>
        <SearchForm color={searchFormColor} />
        <div className="btns-container">
          <span>Encontrados {showFavorites ? favoritesList.length : '20'} herois</span>
          <div className="btn-item">
            <img src={hero} alt="" />
            <p>Ordenar por nome - A/Z</p>
          </div>
          <button onClick={toggle ? handleSortAZ : handleSortZA}>
            <img id='btn-toggle' onClick={() => setToggle(!toggle)} src={toggle ? toggleOn : toggleOff} alt="" />
          </button>
          <div className="btn-item">
            <button className='btn-fav' onClick={() => setShowFavorites((prev) => !prev)}>
              <img src={showFavorites ? fillHeart : emptyHeart} alt="" />
              {showFavorites ? <p>Mostrar Todos</p> : <p>Somente favoritos</p>}
            </button>
          </div>
        </div>

        <div className="pagination-container">
          <button onClick={handlePreviousPage} disabled={offset === 0}>
            PÁGINA ANTERIOR
          </button>
          <button onClick={handleNextPage}>
            PRÓXIMA PÁGINA
          </button>
        </div>
      </Wrapper>

      {isLoading ?
        (
          <div className="load-container">
            <div className="loading"></div>
          </div>

        ) : isError
          ? (<div>ALGO DEU ERRADO...</div>)
          : (<Characters data={heroes} />)
      }
      <footer></footer>
    </>
  );
};

export default Home;
