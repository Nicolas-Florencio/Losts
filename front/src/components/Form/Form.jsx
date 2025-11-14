import Button from '../Button/Button';
import Input from '../Input/Input';
import StatusItem from '../StatusItem/StatusItem';
import styles from './Form.module.css';

export default function Form({action, inputs = [], nomeBotao, statusItem, apiForm}) {
    let componenteStatus = statusItem ? <StatusItem /> : "";

    return (
        <>
            <form className={styles.form} action={action} method="post">
                {inputs.map((item, index) => (
                    <Input key={index} {...item} />  
                ))}
                {
                    componenteStatus
                }

                <Button tipo="tertiary" conteudo={nomeBotao} onClick={apiForm} />
            </form>
        </>
    )
}