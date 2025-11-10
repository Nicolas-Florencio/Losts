import styles from './Item.module.css';

export default function Item() {
    return (
        <>
            <div className={styles.container}>
                <span className={styles.status}>Encontrado</span>
                <img className={styles.foto} src="/celular.png" alt="celular perdido" />
                <div className={styles.info}>
                    <span className={styles.name}>Celular</span>
                    <span className={styles.local}>Sala 04</span>
                    <span className={styles.data}>11/03/2025</span>
                </div>
            </div>
        </>
    )
}