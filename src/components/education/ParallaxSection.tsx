import React, { ReactNode } from 'react';
import { Parallax } from 'react-parallax';

interface ParallaxSectionProps {
    image: string;
    strength: number;
    children: ReactNode;
}

const ParallaxSection: React.FC<ParallaxSectionProps> = ({ image, strength, children }) => {
    return (
        <Parallax bgImage={image} strength={strength}>
            <div style={{ height: 500, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {children}
            </div>
        </Parallax>
    );
};

export default ParallaxSection;
