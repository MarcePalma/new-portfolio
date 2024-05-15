import React from 'react';
import Image from 'next/image';
import DynamicSketch from './ParticlesSketch';


const Hero = () => {
    return (
        <section>

            <div style={{ zIndex: 1 }}>
                <Image src={'/images/hero.webp'} width={150} height={150} alt='hero icon' />
                <DynamicSketch/>
            </div>
        </section>
    );
};

export default Hero;