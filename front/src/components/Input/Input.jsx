import styles from './Input.module.css';

export default function Input({labelName, tipo, placeholder, nome}) {
    return (
        <> 
            <div className={styles.container}>
                <label className={styles.label} htmlFor={nome}>{labelName}</label>
                <input className={styles.input} type={tipo} name={nome} placeholder={placeholder} />
            </div>
        </>
    )
}