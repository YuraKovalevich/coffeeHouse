import React from 'react';
import styles from "../styles/HomeStyles/Enjoy.module.css";
import MainVideo from "../assests/icons/MainVideo";
import { Link } from "react-router-dom";
import { STORE_ROUTE } from '../utils/consts';
import MenuLogo from '../assests/icons/MenuLogo';

const Enjoy = () => {
    return (
        <div className={styles.enjoy}>
            <MainVideo />
            <div className={styles.enjoy__text}>
                <h2 className={styles.enjoy__title}><span className={styles.titleItalic}>Enjoy</span> premium coffee at
                    our
                    charming cafe</h2>
                <p className={styles.enjoy__description}>With its inviting atmosphere and delicious coffee options, the
                    Coffee House Resource is a popular destination for coffee lovers and those seeking a warm and
                    inviting
                    space to enjoy their favorite beverage.</p>
                <Link to={STORE_ROUTE} className={styles.enjoy__menu}>
                    <span className={styles.menuLink__text}>Menu</span>
                    <svg className={`${styles.menuLink__icon} ${styles.menuLink__iconHidden}`}  width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M14.167 9.76667V11.6667C14.167 14.8883 11.5553 17.5 8.33366 17.5C5.112 17.5 2.50033 14.8883 2.50033 11.6667V9.76667C2.50033 9.4353 2.76896 9.16667 3.10033 9.16667H13.567C13.8984 9.16667 14.167 9.4353 14.167 9.76667Z"
                            stroke="#403F3D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path
                            d="M10.0003 7.50008C10.0003 6.66675 10.5956 5.83341 11.786 5.83341V5.83341C13.101 5.83341 14.167 4.76743 14.167 3.45246V2.91675"
                            stroke="#403F3D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path
                            d="M6.66634 7.5V7.08333C6.66634 5.70262 7.78563 4.58333 9.16634 4.58333V4.58333C10.0868 4.58333 10.833 3.83714 10.833 2.91667V2.5"
                            stroke="#403F3D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path
                            d="M13.333 9.16675H15.4163C16.5669 9.16675 17.4997 10.0995 17.4997 11.2501C17.4997 12.4007 16.5669 13.3334 15.4163 13.3334H14.1663"
                            stroke="#403F3D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </Link>

            </div>
        </div>
    );
};

export default Enjoy;