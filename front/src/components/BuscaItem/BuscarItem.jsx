import Form from '../Form/Form';
import styles from './BuscarItem.module.css';

const ednpoint = "#";

const inputs = [
    { labelName: "Digite o nome do item", tipo: "text", placeholder: "Ex: Smartphone", nome: "item" },
];

export default function BuscarItem() {
    return (
        <>
            <div className={styles.container}>
                <h1>Buscar Itens</h1>
                <Form action={ednpoint} inputs={inputs} nomeBotao="Buscar" />
            </div>
        </>
    )
}