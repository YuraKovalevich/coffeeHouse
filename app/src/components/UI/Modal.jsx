import React, { useState, useEffect } from 'react';
import styles from '../../styles/StoreStyles/Modal.module.css';
import { useDispatch, useSelector } from "react-redux";
import { ADD_ONE, ADD_THREE, ADD_TO_BASKET, ADD_TWO, SET_INITIAL_CASH } from "../../utils/consts";

const Modal = ({ description, onClose }) => {
    const SIZE_S = description.sizes.s.size;
    const SIZE_M = description.sizes.m.size;
    const SIZE_L = description.sizes.l.size;
    const ADD_PRICE_M = Number(description.sizes.m.addPrice);
    const ADD_PRICE_L = Number(description.sizes.l.addPrice);
    const ADD_PRICE_ONE = Number(description.additives.addOne.addPrice);
    const ADD_PRICE_TWO = Number(description.additives.addTwo.addPrice);
    const ADD_PRICE_THREE = Number(description.additives.addThree.addPrice);

    const [activeSize, setActiveSize] = useState(SIZE_S);
    const [activeAdditives, setActiveAdditives] = useState([]);

    const dispatch = useDispatch();
    const cash = useSelector(state => state.cash.toFixed(2));

    useEffect(() => {
        const initialPrice = calculateTotalPrice(Number(description.price), activeSize, activeAdditives);
        dispatch({ type: SET_INITIAL_CASH, payload: initialPrice });
    }, [description.price, activeSize, activeAdditives, dispatch]);

    const calculateTotalPrice = (basePrice, size, additives) => {
        let newPrice = basePrice;
        if (size === SIZE_M) {
            newPrice += ADD_PRICE_M;
        } else if (size === SIZE_L) {
            newPrice += ADD_PRICE_L;
        }

        additives.forEach(additive => {
            if (additive === ADD_ONE) {
                newPrice += ADD_PRICE_ONE;
            } else if (additive === ADD_TWO) {
                newPrice += ADD_PRICE_TWO;
            } else if (additive === ADD_THREE) {
                newPrice += ADD_PRICE_THREE;
            }
        });
        return newPrice;
    };

    const handleTabClickSize = (size) => {
        setActiveSize(size);
    };

    const handleTabClickAdditives = (additive) => {
        setActiveAdditives(prevState => {
            const newAdditives = prevState.includes(additive) ? prevState.filter(item => item !== additive) : [...prevState, additive];
            return newAdditives;
        });
    };

    const addToBasket = () => {
        const selectedAdditives = activeAdditives.map(additive => {
            switch (additive) {
                case ADD_ONE:
                    return description.additives.addOne.title;
                case ADD_TWO:
                    return description.additives.addTwo.title;
                case ADD_THREE:
                    return description.additives.addThree.title;
                default:
                    return '';
            }
        });

        const product = {
            name: description.name,
            pic: description.src,
            price: cash,
            additives: selectedAdditives,
            size: activeSize
        };

        dispatch({ type: ADD_TO_BASKET, payload: product });
        onClose(); 
    };

    useEffect(() => {
     
        const initialPrice = calculateTotalPrice(Number(description.price), activeSize, activeAdditives);
        dispatch({ type: SET_INITIAL_CASH, payload: initialPrice });
    }, [activeSize, activeAdditives, dispatch]);

    return (
        <div className={styles.productModal}>
            <div className={styles.productWrapper}>
                <picture className={styles.productImg}>
                    <img src={require(`../../${description.src}`)} alt={description.name} className={styles.productIcon} />
                </picture>
                <div className={styles.productContent}>
                    <h2 className={styles.productName}>{description.name}</h2>
                    <p className={styles.productDesc}>{description.description}</p>
                    <span className={styles.productSize}>Size</span>
                    <div className={styles.wrapperTab}>
                        <button
                            onClick={() => handleTabClickSize(SIZE_S)}
                            className={`${styles.wrapperBtn} ${activeSize === SIZE_S ? styles.active : ""}`}
                        >
                            <span className={styles.wrapperTabOption}>S</span>
                            <span className={styles.wrapperTabSize}>{SIZE_S}</span>
                        </button>
                        <button
                            onClick={() => handleTabClickSize(SIZE_M)}
                            className={`${styles.wrapperBtn} ${activeSize === SIZE_M ? styles.active : ""}`}
                        >
                            <span className={styles.wrapperTabOption}>M</span>
                            <span className={styles.wrapperTabSize}>{SIZE_M}</span>
                        </button>
                        <button
                            onClick={() => handleTabClickSize(SIZE_L)}
                            className={`${styles.wrapperBtn} ${activeSize === SIZE_L ? styles.active : ""}`}
                        >
                            <span className={styles.wrapperTabOption}>L</span>
                            <span className={styles.wrapperTabSize}>{SIZE_L}</span>
                        </button>
                    </div>
                    <span className={styles.productSize}>Additives</span>
                    <div className={styles.wrapperTab}>
                        <button
                            onClick={() => handleTabClickAdditives(ADD_ONE, ADD_PRICE_ONE)}
                            className={`${styles.wrapperBtn} ${activeAdditives.includes(ADD_ONE) ? styles.active : ""}`}
                        >
                            <span className={styles.wrapperTabOption}>1</span>
                            <span className={styles.wrapperTabSize}>{description.additives.addOne.title}</span>
                        </button>
                        <button
                            onClick={() => handleTabClickAdditives(ADD_TWO, ADD_PRICE_TWO)}
                            className={`${styles.wrapperBtn} ${activeAdditives.includes(ADD_TWO) ? styles.active : ""}`}
                        >
                            <span className={styles.wrapperTabOption}>2</span>
                            <span className={styles.wrapperTabSize}>{description.additives.addTwo.title}</span>
                        </button>
                        <button
                            onClick={() => handleTabClickAdditives(ADD_THREE, ADD_PRICE_THREE)}
                            className={`${styles.wrapperBtn} ${activeAdditives.includes(ADD_THREE) ? styles.active : ""}`}
                        >
                            <span className={styles.wrapperTabOption}>3</span>
                            <span className={styles.wrapperTabSize}>{description.additives.addThree.title}</span>
                        </button>
                    </div>
                    <div className={styles.price}>
                        <span className={styles.topicPrice}>Total:</span>
                        <span className={styles.totalPrice}>{cash} р.</span>
                    </div>
                    <div className={styles.elaboration}>
                        <svg className={styles.svgIcon} width="16" height="16" viewBox="0 0 16 16" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_268_9737)">
                                <path d="M8 7.66663V11" stroke="#403F3D" strokeLinecap="round"
                                      strokeLinejoin="round" />
                                <path d="M8 5.00667L8.00667 4.99926" stroke="#403F3D" strokeLinecap="round"
                                      strokeLinejoin="round" />
                                <path
                                    d="M8.00016 14.6667C11.6821 14.6667 14.6668 11.6819 14.6668 8.00004C14.6668 4.31814 11.6821 1.33337 8.00016 1.33337C4.31826 1.33337 1.3335 4.31814 1.3335 8.00004C1.3335 11.6819 4.31826 14.6667 8.00016 14.6667Z"
                                    stroke="#403F3D" strokeLinecap="round" strokeLinejoin="round" />
                            </g>
                            <defs>
                                <clipPath id="clip0_268_9737">
                                    <rect width="16" height="16" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        <p className={styles.elaborationDesc}>The cost is not final. Download our mobile app to see the
                            final price and place your order. Earn loyalty points and enjoy your favorite coffee with up
                            to 20% discount.</p>
                    </div>
                    <button onClick={addToBasket} className={styles.productBasketButton}>Add to
                        basket
                    </button>
                    <button onClick={onClose} className={styles.productModalButton}>
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
