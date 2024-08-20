import React from 'react';
import { Link } from 'react-router-dom';
import Logo from "../assests/icons/Logo";
import MenuLogo from "../assests/icons/MenuLogo";
import styles from '../styles/HomeStyles/Navbar.module.css'
import {STORE_ROUTE} from "../utils/consts";


function Navbar() {
    return (
        <div className={styles.navbar}>
            <div className={styles.navbar__container}>
                <Link to="/" className={styles.navbar__logo}>
                    <Logo className={styles.Logo}/>
                </Link>
                <nav className={styles.navbar__menu}>
                    <ul className={styles.menu__list}>
                        <li className={styles.menu__item}>
                            <Link to="/" className={styles.menu__link}>Favorite coffee</Link>
                        </li>
                        <li className={styles.menu__item}>
                            <Link to="/" className={styles.menu__link}>About</Link>
                        </li>
                        <li className={styles.menu__item}>
                            <Link to="/" className={styles.menu__link}>Mobile app</Link>
                        </li>
                        <li className={styles.menu__item}>
                            <Link to="/" className={styles.menu__link}>Contact us</Link>
                        </li>
                    </ul>
                </nav>
                <Link to={STORE_ROUTE} className={styles.menu}>
                    <span className={styles.menuLink__text}>Menu</span>
                    <MenuLogo/>
                </Link>
            </div>
        </div>
    )
}

export default Navbar
