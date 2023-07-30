import React, {createContext, useContext, useEffect, useState} from 'react';
import {toast} from 'react-toastify';

const FavoritesContext = createContext();

export function useFavorites() {
  return useContext(FavoritesContext);
}

// Provedor de favoritos que gerencia a lista e a persistência em localStorage
export const FavoritesProvider = ({children}) => {
  const [showFavorites, setShowFavorites] = useState(false);

  const [favoritesList, setFavoritesList] = useState(() => {
    const storedFavorites = localStorage.getItem('favorites');
    return storedFavorites ? JSON.parse(storedFavorites) : [];
  });



  // Função para alternar o status de favorito de um herói
  const handleFavoriteToggle = (id, name, thumbnail) => {
    if (favoritesList.length >= 5 && !favoritesList.some((hero) => hero.id === id)) {
      toast.error('Máximo atingido: Você já possui 5 favoritos.');
      return;
    }
    setFavoritesList((prevFavorites) => {
      if (prevFavorites.some((hero) => hero.id === id)) {
        return prevFavorites.filter((hero) => hero.id !== id);
      } else {
        return [...prevFavorites, {id, name, thumbnail}];
      }
    });
  };

  // Efeito para atualizar o localStorage sempre que a lista de favoritos mudar
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favoritesList));
  }, [favoritesList]);

  return (
    <FavoritesContext.Provider value={{favoritesList, handleFavoriteToggle, showFavorites, setShowFavorites}}>
      {children}
    </FavoritesContext.Provider>
  );
};
