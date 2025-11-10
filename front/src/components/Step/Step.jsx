import styles from './Step.module.css';

export default function Step({ icone, imagem, titulo, descricao }) {
    return (
        <>
            <div className={styles.container}>
                <img src={imagem} alt={titulo} />
                <div className={styles.textos}>
                    <h3>{icone}{titulo}</h3>
                    <span>{descricao}</span>
                </div>
            </div>
        </>
    )
}