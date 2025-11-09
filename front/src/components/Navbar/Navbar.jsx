import styles from './Navbar.module.css';

import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <>
            <nav>
                <div className={styles.items}>
                    <img className={styles.logoNav} src="/logo_pequena.png" alt="logo" />
                    <Link className={styles.link} to = '/' >Home</Link>
                    <Link className={styles.link} to = '/itens' >Itens</Link>
                    <Link className={styles.link} to = '/cadastrar' >Cadastrar</Link>
                </div>
                <div className={styles.profileIcon}>
                    <img className={styles.logoNav} src="/logo_pequena.png" alt="logo" />
                </div>
            </nav>
        </>
    )
}