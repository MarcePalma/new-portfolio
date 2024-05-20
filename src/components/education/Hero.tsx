import React from 'react';
import Image from 'next/image';

const Character = () => {
    return (
        <div style={{ position: 'fixed', bottom: '20px', right: '20px', zIndex: 1000 }}>
            <Image src="/images/hero2.png" alt="Character" width={150} height={150} />
        </div>
    );
};

export default Character;