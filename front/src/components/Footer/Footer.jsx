import styles from './Footer.module.css';

import { MdOutlineContactSupport } from "react-icons/md";

export default function Footer() {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.contatoContainer}>
                    <p><MdOutlineContactSupport size={16} /> Contate-nos: support@achadoseperdidos.edu</p>
                </div>
                <div className={styles.direitosContainer}>
                    <p>&copy; 2023 Achados e Perdidos</p>
                </div>
                <div className={styles.termosContainer}>
                    <p>Termos de serviço | Politica de privacidade</p>
                </div>
            </div>
        </>
    )
}