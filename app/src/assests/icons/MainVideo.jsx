import React from 'react';
import videoBg from '../../assests/video (2160p).mp4'
import styles from '../../styles/HomeStyles/MainVideo.module.css'
const MainVideo = () => {
    return (
        <div className={styles.bgVideo}>
            <video src={videoBg} autoPlay loop muted/>
        </div>
    );
};

export default MainVideo;