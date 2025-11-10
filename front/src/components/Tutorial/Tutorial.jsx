import Step from '../Step/Step';
import styles from './Tutorial.module.css';

import { MdOutlineSearch, MdOutlineTask, MdHandshake } from "react-icons/md";

export default function Tutorial() {
    return (
        <>
            <div className={styles.container}>
                <h1>Como Funciona</h1>
                <div className={styles.steps}>
                    <Step
                        icone = {<MdOutlineSearch size={16} />}
                        imagem = "/procurar.png"
                        titulo = "Procurar"
                        descricao = "Busque itens perdidos facilmente atraves de nosso site"
                    />
                    <Step
                        icone = {<MdOutlineTask size={16} />}
                        imagem = "/cadastrar.png"
                        titulo = "Cadastrar"
                        descricao = "Registre um item perdido ou encontrato com poucos passos"
                    />
                    <Step
                        icone = {<MdHandshake size={16} />}
                        imagem = "/amizade.png"
                        titulo = "Resolver"
                        descricao = "Recupere seus itens atraves da plataforma facilmente"
                    />
                </div>
            </div>
        </>
    )
}