import styles from './Banner.module.css';

export default function Banner() {
    return (
        <>
            <div className={styles.banner}>
                <div className={styles.container}>
                    <h1 className={styles.titulo}>Encontre ou registre objetos perdidos na sua faculdade</h1>
                    <div className={styles.botoes}>
                        <button className={styles.botao1}>Cadastrar Item</button>
                        <button className={styles.botao2}>Ver Itens</button>
                    </div>
                </div>
                <img id={styles.imagem} src="/menina.png" alt="menina com caderno" />
            </div>
        </>
    )
}