import Imagem from '../Imagem/Imagem';
import styles from './Item.module.css';

export default function Item({status, src, nome, local, data}) {
    return (
        <>
            <div className={styles.container}>
                <span className={styles.status}>{status}</span>
                <Imagem className={styles.foto} src={src} alt={nome} />
                <div className={styles.info}>
                    <span className={styles.name}>{nome}</span>
                    <span className={styles.local}>{local}</span>
                    <span className={styles.data}>{data}</span>
                </div>
            </div>
        </>
    )
}