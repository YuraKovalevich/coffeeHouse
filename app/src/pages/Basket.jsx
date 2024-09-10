import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from '../styles/StoreStyles/Basket.module.css';
import { UPDATE_BASKET } from '../utils/consts';
import Counter from '../components/Counter/Counter';

const Basket = () => {
    const dispatch = useDispatch();
    const basket = useSelector(state => state.basket);

    const removeItem = (index) => {
        const updatedBasket = [...basket];
        updatedBasket.splice(index, 1);
        dispatch({ type: UPDATE_BASKET, payload: updatedBasket });
    };


    const updateItemQuantity = (index, newCount) => {
        const updatedBasket = basket.map((item, idx) =>
            idx === index ? { ...item, count: newCount } : item
        );
        dispatch({ type: UPDATE_BASKET, payload: updatedBasket });
    };

    return (
        <div className={styles.basketContainer}>
            <h2 className={styles.basketTitle}>Basket</h2>
            {basket.length === 0 ? (
                <p className={styles.emptyBasket}>Basket is empty ...</p>
            ) : (
                <ul className={styles.basketList}>
                    {basket.map((item, index) => (
                        
                        <li key={index} className={styles.basketItem}>
                            <input type="checkbox" className={styles.checkbox} />
                            <img
                                src={require(`../${item.pic}`)}
                                alt={item.name}
                                className={styles.itemImage}
                            />
                            <div className={styles.itemDetails}>
                                <span className={styles.itemName}>{item.name}</span>
                                <span className={styles.itemSize}> Size: {item.size}</span>
                                {item.additives && item.additives.length > 0 && (
                                    <div className={styles.itemAdditives}>
                                        <strong>Additives:</strong> <span className={styles.additives}>{item.additives.join(', ')}</span>                                        
                                    </div>
                                )}
                                <div className={styles.basketActions}>
                                    <Counter
                                        count={item.count || 1}
                                        index={index}
                                        updateItemQuantity={updateItemQuantity}
                                        removeItem={removeItem}
                                    />
                                </div>
                            </div>
                            <div className={styles.itemPriceSection}>
                                <span className={styles.itemPrice}>{(item.price * (item.count || 1)).toFixed(2)} р.</span>
                                <button onClick={() => removeItem(index)} className={styles.deleteButton}>
                                    <svg className={styles.deleteIcon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path d="M3 6l3 18h12l3-18H3zm18-4h-5V0h-6v2H3v2h18V2z" />
                                    </svg>
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Basket;
