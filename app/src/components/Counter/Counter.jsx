import React from 'react';
import styles from './Counter.module.css'

const Counter = ({ count, index, updateItemQuantity, removeItem }) => {

    const increaseQuantity = () => {
        updateItemQuantity(index, count + 1);
    };

    const decreaseQuantity = () => {
        if (count > 1) {
            updateItemQuantity(index, count - 1);
        } else {
            removeItem(index);
        }
    };

    return (
        <div className={styles.counter}>
            <button onClick={decreaseQuantity} className={styles.actionButton}>-</button>
            <span className={styles.itemQuantity}>{count}</span>
            <button onClick={increaseQuantity} className={styles.actionButton}>+</button>
        </div>
    );
};

export default Counter;
