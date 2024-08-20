import React, { useState } from "react";
import styles from "../styles/StoreStyles/Store.module.css";
import coffee from "../assests/images/coffee/coffee.png";
import tea from "../assests/images/tea/tea.png";
import desserts from "../assests/images/desserts/dessert.png";
import Products from "../components/Products";
import Modal from "../components/UI/Modal";
import { COFFEE, DESSERTS, TEA } from "../utils/consts";

const Store = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [activeTab, setActiveTab] = useState(COFFEE);
    const [description, setDescription] = useState();
    const openModal = (item) => {
        setDescription(item);
        setIsModalVisible(true);
    };

    const closeModal = () => {
        setIsModalVisible(false);
        setDescription('');
    };

    const handleTabClick = (data) => {
        setActiveTab(data);
    };

    return (
        <div className={styles.store}>
            <div className={styles.store__container}>
                <div className={styles.store__wrapper}>
                    <h2 className={styles.store__title}>
                        Behind each of our cups hides an
                        <span> amazing surprise</span>
                    </h2>
                    <div className={styles.wrapper__tab}>
                        <button
                            onClick={() => handleTabClick(COFFEE)}
                            className={`${styles.wrapperTab} ${activeTab === COFFEE ? styles.active : ""}`}
                        >
                            <picture className={styles.tabImg}>
                                <img className={styles.tabIcon} src={coffee} alt=""/>
                            </picture>
                            <span className={styles.tabName}>Coffee</span>
                        </button>
                        <button
                            onClick={() => handleTabClick(TEA)}
                            className={`${styles.wrapperTab} ${activeTab === TEA ? styles.active : ""}`}
                        >
                            <picture className={styles.tabImg}>
                                <img className={styles.tabIcon} src={tea} alt=""/>
                            </picture>
                            <span className={styles.tabName}>Tea</span>
                        </button>
                        <button
                            onClick={() => handleTabClick(DESSERTS)}
                            className={`${styles.wrapperTab} ${activeTab === DESSERTS ? styles.active : ""}`}
                        >
                            <picture className={styles.tabImg}>
                                <img className={styles.tabIcon} src={desserts} alt=""/>
                            </picture>
                            <span className={styles.tabName}>Dessert</span>
                        </button>
                    </div>
                </div>
                <Products category={activeTab} onClick={(product) => openModal(product)} />
                {
                    isModalVisible && description && (
                        <Modal description={description} onClose={closeModal} />
                    )
                }
            </div>
        </div>
    );
};

export default Store;
