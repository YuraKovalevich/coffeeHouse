import React from 'react';
import styles from "../styles/HomeStyles/Enjoy.module.css";
import MainVideo from "../assests/icons/MainVideo";
import {Link} from "react-router-dom";

const Enjoy = () => {
    return (
        <div className={styles.enjoy}>
            <MainVideo/>
            <div className={styles.enjoy__text}>
                <h2 className={styles.enjoy__title}><span className={styles.titleItalic}>Enjoy</span> premium coffee at
                    our
                    charming cafe</h2>
                <p className={styles.enjoy__description}>With its inviting atmosphere and delicious coffee options, the
                    Coffee House Resource is a popular destination for coffee lovers and those seeking a warm and
                    inviting
                    space to enjoy their favorite beverage.</p>
                <Link to='/' className={styles.enjoy__menu}><span className={styles.menuLink__text}>Menu</span></Link>
            </div>
        </div>
    );
};

export default Enjoy;