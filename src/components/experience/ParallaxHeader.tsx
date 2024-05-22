import React, { useEffect } from 'react';
import { Parallax } from 'react-parallax';
import { ParallaxHeaderProps } from '@/types/types';

const ParallaxHeader: React.FC<ParallaxHeaderProps> = ({ image, strength, children }) => {
    useEffect(() => {
        let start = 0;
        const end = 1;
        const duration = 2000;
        const stepTime = Math.abs(Math.floor(duration / (end - start)));
        const obj = document.getElementById("experience-years");

        if (obj) {
            const timer = setInterval(() => {
                start++;
                obj.innerHTML = start.toString();
                if (start === end) {
                    clearInterval(timer);
                }
            }, stepTime);
        }
    }, []);

    return (
        <Parallax bgImage={image} strength={strength}>
            <div style={{ height: '400px' }} className="parallax-content">
                {children}
            </div>
        </Parallax>
    );
};

export default ParallaxHeader;