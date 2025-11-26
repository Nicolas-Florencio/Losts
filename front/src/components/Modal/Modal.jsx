import styles from "./Modal.module.css";

export default function Modal({ aberto, fechar, children }) {
    if (!aberto) return null;

    return (
        <div className={styles.overlay} onClick={fechar}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                <button className={styles.close} onClick={fechar}>X</button>
                {children}
            </div>
        </div>
    );
}
