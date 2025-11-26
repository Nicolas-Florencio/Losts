import Button from '../Button/Button';
import Input from '../Input/Input';
import StatusItem from '../StatusItem/StatusItem';
import styles from './Form.module.css';

export default function Form({ inputs = [], nomeBotao, statusItem, apiForm }) {
    let componenteStatus = statusItem ? <StatusItem /> : "";

    function handleSubmit(e) {
        e.preventDefault(); // impede reload da página
        const formData = new FormData(e.target);
        apiForm(formData);
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            {inputs.map((item, index) => (
                <Input key={index} {...item} />
            ))}

            {componenteStatus}

            <Button tipo="tertiary" conteudo={nomeBotao} />
        </form>
    );
}