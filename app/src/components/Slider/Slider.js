import React, { useState } from "react";
import NavButton from "../../assests/icons/NavButton";
import styles from '../../styles/HomeStyles/Slider.module.css';

export default function Slider({ data }) {
    const [slide, setSlide] = useState(0);
    const nextSlide = () => {
        setSlide(slide === data.slides.length - 1 ? 0 : slide + 1);
    }
    const prevSlide = () => {
        setSlide(slide === 0 ? data.slides.length - 1 : slide - 1);
    }
    return (
        <div className={styles.content} >
            <div className={styles.slider}>
                {data.slides.map((item, index) => {
                    return (
                        <ul className={styles.coffeeList} key={item.name}>
                            <li className={(styles.coffeeItem, slide === index ? styles.slide : styles.slideHidden)}>
                                <img src={require(`../../${item.src}`)} alt={item.alt} key={index} />
                                <h3 className={styles.coffeeName}>{item.name}</h3>
                                <p className={styles.coffeeDescription}>{item.descripton}</p>
                                <p className={styles.coffeePrice}>{item.price}</p>
                            </li>
                        </ul>
                    )
                })}
            </div>
            <div className={styles.coffeeNavigation}>
                <button className={styles.navBtnLeft} onClick={prevSlide}><NavButton className={styles.nav} /></button>
                <button className={styles.navBtnRight} onClick={nextSlide}><NavButton className={styles.nav} /></button>
            </div>
            <span className={styles.paginationSliderBtns}>
                {data.slides.map((_, index) => {
                    return (
                        <button key={index} onClick={(event) => setSlide(index)} className={slide === index ? styles.indicator : (styles.indicator, styles.indicatorInactive)}></button>
                    );
                })}
            </span>
        </div >
    )
}