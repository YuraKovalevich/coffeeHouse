import React, {useState} from 'react';
import data from '../utils/data.json'
import styles from '../styles/StoreStyles/Products.module.css'
import {useDispatch, useSelector} from "react-redux";

const Products = ({category, onClick}) => {
    const products = data[category]

    return (
        <div className={styles.product__list}>
            {products.map((product, index) => (
                <div key={index} className={`${styles.product__item} ${styles.product__listItem}`}>
                    <button onClick={() => onClick(product)} className={styles.productListBtn}>
                        <picture className={styles.productImg}>
                            <img src={require(`../${product.src}`)} alt={product.alt} className={styles.listIcon}/>
                        </picture>
                        <span className={styles.productListProperty}>
                            <span className={styles.productListName}>{product.name}</span>
                            <span className={styles.productListDesc}>{product.description}</span>
                            <span className={styles.productListPrice}>{product.price}</span>
                        </span>
                    </button>
                </div>
            ))
            }
        </div>
    );
};

export default Products;