import React from 'react';
import styles from './LastItems.module.css';
import Item from '../Item/Item';

export default function LastItems({titulo, itens = []}) {
    return (
        <>
            <div className={styles.lastItems}>
                <h1>{titulo}</h1>
                <div className={styles.items}>
                    {itens.map((item, index) => (
                        <Item key={index} {...item} />
                    ))}
                </div>
            </div>
        </>
    )
}