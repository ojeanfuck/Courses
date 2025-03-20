import { Link } from 'react-router-dom';
import styles from './CabecalhoLink.module.css';

function CabecalhaLink({ url, children }) {
    return (
        <Link to={url} className={styles.link}>
            {children}
        </Link>
    )
}

export default CabecalhaLink;