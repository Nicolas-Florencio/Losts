import styles from './Navbar.module.css';

import { MdPerson } from "react-icons/md";
import { NavLink } from 'react-router-dom';

export default function Navbar() {
    return (
        <>
            <nav>
                <div className={styles.items}>
                    <NavLink className={styles.linkLogo} to='/'>
                        <img className={styles.logoNav} src="/logo_pequena.png" alt="logo" />
                    </NavLink>

                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive ? `${styles.link} ${styles.active}` : styles.link
                        }
                    >
                        Home
                    </NavLink>

                    <NavLink
                        to="/itens"
                        className={({ isActive }) =>
                            isActive ? `${styles.link} ${styles.active}` : styles.link
                        }
                    >
                        Itens
                    </NavLink>

                    <NavLink
                        to="/cadastrar"
                        className={({ isActive }) =>
                            isActive ? `${styles.link} ${styles.active}` : styles.link
                        }
                    >
                        Cadastrar
                    </NavLink>
                </div>

                <div className={styles.profileIcon}>
                    <NavLink
                        to='/conta'
                        className={({ isActive }) =>
                            isActive ? `${styles.linkIcone} ${styles.activeIcon}` : styles.linkIcone
                        }
                    >
                        <MdPerson className={styles.icone} />
                    </NavLink>
                </div>
            </nav>
        </>
    )
}
