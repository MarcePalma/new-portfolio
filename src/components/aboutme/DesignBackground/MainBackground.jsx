import styles from './MainBackground.module.css';
import Image from 'next/image';
import React from 'react';

export default function Background() {
    return (
        <div className={styles.mainbackground}>
            <div className={styles.tsukiStylesheet}></div>
            <div className={styles.tsukiTree} onClick={() => {
                document.querySelector(`.${styles.bird1Stylesheet}`).classList.add(styles.flyAnimation);
            }}></div>
            <div className={styles.bird1Stylesheet}></div>
        </div>
    );
}
