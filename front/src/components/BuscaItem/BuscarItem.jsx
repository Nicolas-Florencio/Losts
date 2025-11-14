import Form from '../Form/Form';
import styles from './BuscarItem.module.css';

const ednpoint = "#";

const inputs = [
    { labelName: "Digite o nome do item", tipo: "text", placeholder: "Ex: Smartphone", nome: "item" },
];

function consultarApi() {
    console.log("Buscando na API");
}

export default function BuscarItem() {
    return (
        <>
            <div id='buscar-item' className={styles.container}>
                <h1 className={styles.titulo}>Buscar Itens</h1>
                <Form className={styles.form} action={ednpoint} inputs={inputs} statusItem={true} nomeBotao="Buscar" apiForm={consultarApi} />
            </div>
        </>
    )
}