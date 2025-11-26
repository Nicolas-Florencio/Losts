import { Link } from 'react-router-dom';
import styles from './Button.module.css';

export default function Button({ tipo, conteudo, to, onClick, anchor }) {
    
    if (to) {
        return (
            <Link to={to} className={styles[tipo]}>
                {conteudo}
            </Link>
        );
    }

    if (anchor) {
        return (
            <button 
                className={styles[tipo]}
                type="button"
                onClick={() => {
                    const el = document.getElementById(anchor);
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
            >
                {conteudo}
            </button>
        );
    }

    // Caso esteja dentro de um form, ele vira submit
    return (
        <button
            className={styles[tipo]}
            type={onClick ? "button" : "submit"}  // ← chave da solução
            onClick={onClick}
        >
            {conteudo}
        </button>
    );
}
