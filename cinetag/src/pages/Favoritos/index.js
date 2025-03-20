import Titulo from 'components/Titulo'
import styles from './Favoritos.module.css'
import Banner from 'components/Banner'
import Card from 'components/Card'
import { useFavoritoContext } from 'contextos/Favoritos'

function Favoritos() {
    const { favorito } = useFavoritoContext();
    return (
        <>
            <Banner imagem="favoritos" />
            <Titulo>
                <h1>Meus Favoritos</h1>
                <section className={styles.container}>
                    {favorito.map((item) => (
                        < Card key={item.id} {...item} />
                    ))}
                </section>
            </Titulo>
        </>
    )
}

export default Favoritos