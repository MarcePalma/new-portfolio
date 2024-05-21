import React from 'react';
import { Parallax } from 'react-parallax';
import { ParallaxSectionProps } from '@/types/types';

const ParallaxHeader: React.FC<ParallaxSectionProps> = ({ image, strength, children }) => {
    return (
        <Parallax bgImage={image} strength={strength}>
            <div style={{ height: '400px' }} className="parallax-content">
                {children}
            </div>
        </Parallax>
    );
};

export default ParallaxHeader;
