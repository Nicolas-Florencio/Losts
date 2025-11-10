import Item from '../Item/Item';
import styles from './LastItems.module.css';

export default function LastItems() {
    return (
        <>
            <div className={styles.lastItems}>
                <h1>Últimos Itens Cadastrados</h1>
                <div className={styles.items}>
                    <Item />
                    <Item />
                    <Item />
                </div>
            </div>
        </>
    )
}