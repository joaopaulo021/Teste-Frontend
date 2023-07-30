import {useEffect, useState} from 'react';
import Character from '../Character'
import {Wrapper} from './styles'
import {useFavorites} from '../../context/FavoriteContext';

const getRenderedData = (showFavorites, data, favoritesList) => {
  if (showFavorites && favoritesList.length > 0) {
    // Retorna o array de favoritos completo se showFavorites for true e houver algum item no array
    return favoritesList;

  } else if (showFavorites && favoritesList.length === 0) {
    // Se showFavorites for true, mas não houver nenhum item no array, retorna null
    return null;

  } else {
    // Retorna o array original de data se showFavorites for false
    return data;
  }
};
const Characters = ({data}) => {

  const {favoritesList, handleFavoriteToggle, showFavorites} = useFavorites();

  const renderedData = getRenderedData(showFavorites, data, favoritesList);

  return (
    <section className='characters'>

      <Wrapper>
        {renderedData ? (
          renderedData.map((character) => (
            <Character
              key={character.id}
              {...character}
              favoritesList={favoritesList}
              handleFavoriteToggle={handleFavoriteToggle}
            />
          ))
        ) : (
          <h2>Nenhum item favoritado ainda</h2>
        )}

      </Wrapper>
    </section>
  )
}

export default Characters
