import Button from '../Button/Button';
import Input from '../Input/Input';
import styles from './Form.module.css';

export default function Form({action, inputs = [], nomeBotao}) {
    return (
        <>
            <form className={styles.form} action={action} method="post">
                {inputs.map((item, index) => (
                    <Input key={index} {...item} />  
                ))}

                <Button to={action} tipo="tertiary" conteudo={nomeBotao} />
            </form>
        </>
    )
}