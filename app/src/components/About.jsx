import React from 'react';
import styles from '../styles/HomeStyles/About.module.css'
import img1 from '../assests/images/mainPage/box.svg'
import img2 from '../assests/images/mainPage/box (1).svg'
import img3 from '../assests/images/mainPage/box (2).svg'
import img4 from '../assests/images/mainPage/box (3).svg'


const About = () => {
    return (
        <div className={styles.about} >
            <div className={styles.about__container}>
                <h2 className={styles.about__title}>Resource is <span>the perfect and cozy place </span>where you can enjoy a variety of hot beverages, relax, catch up with friends, or get some work done.</h2>
                <div className={styles.about__wrapper}>
                    <picture className={styles.about__photo}><img className={styles.about__img} src={img1} alt=""/></picture>
                    <picture className={styles.about__photo}><img className={styles.about__img} src={img3} alt=""/></picture>
                    <picture className={styles.about__photo}><img className={styles.about__img} src={img2} alt=""/></picture>
                    <picture className={styles.about__photo}><img className={styles.about__img} src={img4} alt=""/></picture>
                </div>
            </div>
        </div>
    );
};

export default About;