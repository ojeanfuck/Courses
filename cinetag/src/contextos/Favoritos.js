import { createContext, useState, useContext } from "react";

export const FavoritosContext = createContext();
FavoritosContext.displayName = "Favoritos";

export function FavoritosProvider({ children }) {
    const [favorito, setFavorito] = useState([]);

    return (
        <FavoritosContext.Provider value={{ favorito, setFavorito }}>
            {children}
        </FavoritosContext.Provider>
    )
}

export function useFavoritoContext() {
    const { favorito, setFavorito } = useContext(FavoritosContext);

    function adicionarFavorito(novoFavorito) {
        const temFavorito = favorito.some(item => item.id === novoFavorito.id);
        let novaLista = [...favorito];

        if (!temFavorito) {
            novaLista.push(novoFavorito);
            return setFavorito(novaLista);
        }

        novaLista = favorito.filter((fav) => fav.id !== novoFavorito.id);
        setFavorito(novaLista);
    }

    return {
        favorito,
        adicionarFavorito
    };
}