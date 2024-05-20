import React, { useEffect, useState } from 'react';
import styles from './ProgressBar.module.css';

const ProgressBar = () => {
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const totalScrollHeight = document.documentElement.scrollHeight - window.innerHeight;
            const currentScroll = window.scrollY;
            const scrollPercentage = (currentScroll / totalScrollHeight) * 100;
            setScrollPosition(scrollPercentage);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={'progressBarContainer'}>
            <div className={'progressBar'} style={{ width: `${scrollPosition}%` }}></div>

            <style>
                {`
        .progressBarContainer {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 5px;
            background: rgba(0, 0, 0, 0.1);
            z-index: 9999;
          }
          
          .progressBar {
            height: 5px;
            background: #655FDF;
            width: 0%;
            transition: width 0.25s;
          }
          
        `
                }
            </style>
        </div>
    );
};

export default ProgressBar;