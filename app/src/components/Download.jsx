import React from 'react';
import styles from '../styles/HomeStyles/Download.module.css'
import {Link} from "react-router-dom";
import ButtonGoogle from "../assests/icons/ButtonGoogle";
import ButtonApple from "../assests/icons/ButtonApple";
import phones from '../assests/images/mainPage/mobile-screens.png'

const Download = () => {
    return (
        <div className={styles.download}>
            <div className={styles.download__container}>
                <div className={styles.download__content}>
                    <h2 className={styles.content__title}>
                        <span>Download </span>
                        our apps to start
                        ordering
                    </h2>
                    <p className={styles.content__description}>
                        Download the Resource app today and experience the comfort of ordering
                        your favorite coffee from wherever you are
                    </p>
                    <div className={styles.content__btns}>
                        <button className={styles.btn}>
                            <Link className={styles.link} to='/'>
                                <ButtonApple className={styles.appLink}/>
                                <div className={styles.appLinks}>
                                    <span className={styles.appLinkText}>
                                        Available on the
                                    </span>
                                    <span className={styles.appLinkTopic}>
                                        App Store
                                    </span>
                                </div>
                            </Link>
                        </button>
                        <button className={styles.btn}>
                            <Link className={styles.link} to='/'>
                                <ButtonGoogle className={styles.appLink}/>
                                <div className={styles.appLinks}>
                                    <span className={styles.appLinkText}>
                                        Available on
                                    </span>
                                    <span className={styles.appLinkTopic}>
                                        Google Play
                                    </span>
                                </div>
                            </Link>
                        </button>
                    </div>
                </div>
                <picture className={styles.download__picture}>
                    <img src={phones} alt=""/>
                </picture>
            </div>
        </div>
    );
};

export default Download;