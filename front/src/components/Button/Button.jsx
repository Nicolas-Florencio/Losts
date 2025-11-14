import { Link } from 'react-router-dom';
import styles from './Button.module.css';

export default function Button({ tipo, conteudo, to, onClick, anchor }) {
    
    // 1. Se tiver rota, usa <Link>
    if (to) {
        return (
            <Link to={to} className={styles[tipo]}>
                {conteudo}
            </Link>
        );
    }

    // 2. Se tiver âncora, cria um scroll suave
    if (anchor) {
        return (
            <button 
                className={styles[tipo]}
                type="button"
                onClick={() => {
                    const el = document.getElementById(anchor);
                    if (el) {
                        el.scrollIntoView({ behavior: "smooth" });
                    }
                }}
            >
                {conteudo}
            </button>
        );
    }

    // 3. Se tiver função customizada (ex: consultar API)
    return (
        <button
            className={styles[tipo]}
            type="button"
            onClick={onClick}
        >
            {conteudo}
        </button>
    );
}