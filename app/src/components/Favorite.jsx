import React from 'react';
import styles from '../styles/HomeStyles/Favorite.module.css'
import Slider from './Slider/Slider';
import slides from '../utils/data.json'

const Favorite = () => {
    return (
        <div className={styles.favorite}>
            <div className={styles.favoriteContainer}>
                <h2 className={styles.favoriteTitle}>Choose your <span>favorite </span>coffee</h2>
                <div className={styles.coffeeSlider}>
                    <Slider data={slides}/>
                </div>
            </div>
        </div>
    );
};

export default Favorite;