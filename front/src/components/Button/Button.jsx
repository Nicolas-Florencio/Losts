import { Link } from 'react-router-dom';
import styles from './Button.module.css';

export default function Button({ tipo, conteudo, to }) {
    return (
        <>
            <Link to={to} className={styles[tipo]}>
                {conteudo}
            </Link>
        </>
    )
}