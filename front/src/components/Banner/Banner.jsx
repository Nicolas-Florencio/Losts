import styles from './Banner.module.css';

import React from 'react';

export default function Banner({imagem, conteudo, botoes}) {
    return (
        <>
            <div className={styles.banner}>
                <div className={styles.container}>
                    <h1 className={styles.titulo}>{conteudo}</h1>
                    <div className={styles.botoes}>
                        {botoes.map((item, index) => (
                            React.cloneElement(item, { key: index })
                        ))}
                    </div> 
                </div>
                {imagem}
            </div>
        </>
    )
}