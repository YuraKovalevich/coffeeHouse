import React, { useState , useEffect} from 'react';
import styles from '../../styles/StoreStyles/Modal.module.css';
import {useDispatch, useSelector} from "react-redux";

const Modal = ({ description, onClose }) => {
    const SIZE_S = description.sizes.s.size;
    const SIZE_M = description.sizes.m.size;
    const SIZE_L = description.sizes.l.size;
    const ADD_PRICE_M = description.sizes.m.addPrice;
    const ADD_PRICE_L = description.sizes.l.addPrice;
    const ADD_PRICE_ONE = description.additives.addOne.addPrice;
    const ADD_PRICE_TWO = description.additives.addTwo.addPrice;
    const ADD_PRICE_THREE = description.additives.addThree.addPrice;


    const dispatch = useDispatch()
    const cash = useSelector(state => state.cash)
    console.log(cash)

    return (
        <div className={styles.productModal}>
            <div className={styles.productWrapper}>
                <picture className={styles.productImg}>
                    <img src={require(`../../${description.src}`)} alt="" className={styles.productIcon} />
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
                            onClick={() => handleTabClickSize(SIZE_M, ADD_PRICE_M)}
                            className={`${styles.wrapperBtn} ${activeSize === SIZE_M ? styles.active : ""}`}
                        >
                            <span className={styles.wrapperTabOption}>M</span>
                            <span className={styles.wrapperTabSize}>{SIZE_M}</span>
                        </button>
                        <button
                            onClick={() => handleTabClickSize(SIZE_L, ADD_PRICE_L)}
                            className={`${styles.wrapperBtn} ${activeSize === SIZE_L ? styles.active : ""}`}
                        >
                            <span className={styles.wrapperTabOption}>L</span>
                            <span className={styles.wrapperTabSize}>{SIZE_L}</span>
                        </button>
                    </div>
                    <span className={styles.productSize}>Additives</span>
                    <div className={styles.wrapperTab}>
                        <button
                            onClick={() => handleTabClickAdditives('addOne', ADD_PRICE_ONE)}
                            className={`${styles.wrapperBtn} ${activeAdditives.includes('addOne') ? styles.active : ""}`}
                        >
                            <span className={styles.wrapperTabOption}>1</span>
                            <span className={styles.wrapperTabSize}>{description.additives.addOne.name}</span>
                        </button>
                        <button
                            onClick={() => handleTabClickAdditives('addTwo', ADD_PRICE_TWO)}
                            className={`${styles.wrapperBtn} ${activeAdditives.includes('addTwo') ? styles.active : ""}`}
                        >
                            <span className={styles.wrapperTabOption}>2</span>
                            <span className={styles.wrapperTabSize}>{description.additives.addTwo.name}</span>
                        </button>
                        <button
                            onClick={() => handleTabClickAdditives('addThree', ADD_PRICE_THREE)}
                            className={`${styles.wrapperBtn} ${activeAdditives.includes('addThree') ? styles.active : ""}`}
                        >
                            <span className={styles.wrapperTabOption}>3</span>
                            <span className={styles.wrapperTabSize}>{description.additives.addThree.name}</span>
                        </button>
                    </div>
                    <div className={styles.prise}>
                        <span className={styles.topicPrice}>Total:</span>
                        <span className={styles.totalPrice}>{cash}</span>
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
                    <button className={styles.productBasketButton}>Add to basket</button>
                    <button onClick={onClose} className={styles.productModalButton}>
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
