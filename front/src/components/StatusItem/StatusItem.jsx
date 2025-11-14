import SelectStatus from '../SelectStatus/SelectStatus';
import styles from './StatusItem.module.css';

export default function StatusItem() {
    return (
        <>
            <div className={styles.container}>
                <span className={styles.titulo}>Status do Item</span>
                <div className={styles.opcoes}>
                    <SelectStatus />
                </div>
            </div>
        </>
    )
}