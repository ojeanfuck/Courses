import Rodape from "components/Rodape";
import { FavoritosProvider } from "contextos/Favoritos";
import { Outlet } from "react-router-dom";
import Cabecalho from "components/Cabecalho";
import Container from "components/Container";

function PaginaBase() {
    return (
        <main>
            <Cabecalho />
            <FavoritosProvider>
                <Container>
                    <Outlet />
                </Container>
            </FavoritosProvider>
            <Rodape />
        </main>
    );
}

export default PaginaBase;