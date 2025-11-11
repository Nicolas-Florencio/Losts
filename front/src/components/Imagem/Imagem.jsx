import styles from './Imagem.module.css';

export default function Imagem({ src, alt }) {
    return (
        <>
            <img id={styles.imagem} src={src} alt={alt} />
        </>
    )
}