
import {Link} from 'react-router-dom';
import Wrapper from './styles';
import emptyHeart from '../../assets/icones/heart/Path Copy 2@2x.png'
import fillHeart from '../../assets/icones/heart/Path Copy 7@2x.png'

const Character = ({
  id,
  name,
  thumbnail,
  favoritesList,
  handleFavoriteToggle
}) => {

  const isFavorite = favoritesList.some((hero) => hero.id === id)

  return (
    <Wrapper>
      <div className="img">
        <Link className='link' to={`/hero/${id}`}>
          <img src={`${thumbnail.path}/standard_xlarge.${thumbnail.extension}`} alt={name} />
        </Link>
      </div>
      <div className="footer">
        <h4>{name}</h4>
        <img
          onClick={() => handleFavoriteToggle(id, name, thumbnail)}
          src={isFavorite ? fillHeart : emptyHeart}
          alt={name}
        />
      </div>
    </Wrapper>
  )
}

export default Character
