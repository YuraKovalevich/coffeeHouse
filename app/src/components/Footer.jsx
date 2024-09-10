import React from 'react';
import styles from '../styles/HomeStyles/Footer.module.css'
import {Link} from "react-router-dom";
import Instagram from "../assests/icons/Instagram";
import Twitter from "../assests/icons/Twitter";
import Facebook from "../assests/icons/Facebook";
import IconPlace from "../assests/icons/IconPlace";
import IconClock from "../assests/icons/IconClock";
import IconPhone from "../assests/icons/IconPhone";
const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.footer__container}>
                <div className={styles.footer__content}>
                    <div className={styles.contentMedia}>
                        <h2 className={styles.title}>
                            Sip, Savor, Smile. <br/>
                            <span>It’s coffee time!</span>
                        </h2>
                        <ul className={styles.socialList}>
                            <li className={styles.listItem}>
                                <Link className={styles.listLink} to='/'>
                                    <Twitter className={styles.icon}/>
                                </Link>
                            </li>
                            <li className={styles.listItem}>
                                <Link className={styles.listLink} to='/'>
                                    <Instagram className={styles.icon}/>
                                </Link>
                            </li>
                            <li className={styles.listItem}>
                                <Link className={styles.listLink} to='/'>
                                    <Facebook className={styles.icon}/>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.footer__contact}>
                        <h2 className={styles.footer__topic}>
                            Contact us
                        </h2>
                        <ul className={styles.footer__contactList}>
                            <li className={styles.linkItem}>
                                <Link className={styles.contactLink} to='/'>
                                    <IconPlace className={styles.contactIcon}/>
                                    <span className={styles.linkText}>8558 Green Rd., LA</span>
                                </Link>
                            </li>
                            <li className={styles.linkItem}>
                                <Link className={styles.contactLink} to='/'>
                                    <IconPhone className={styles.contactIcon}/>
                                    <span className={styles.linkText}>+1 (603) 555-0123</span>
                                </Link>
                            </li>
                            <li className={styles.linkItem}>
                                <Link className={styles.contactLink} to='/'>
                                    <IconClock className={styles.contactIcon}/>
                                    <span className={styles.linkText}>Mon-Sat: 9:00 AM - 23:00 PM</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;