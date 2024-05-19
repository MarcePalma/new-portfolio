import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Particles from './ParticlesSketch';
import { motion } from 'framer-motion';

const Hero = () => {
  const [messageIndex, setMessageIndex] = useState(0);
  const messages = [
    "Hey, that's me!",
    "Try clicking on Design!",
    "Click on Coder to see something cool!",
    "Follow me on social media!",
    "Discover more about me in my profile card!",
    "Explore my skills in the profile card!",
    "Learn about my projects in the profile card!",
    "Check out my contact information in the profile card!",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero" style={{ position: 'relative' }}>
      <div style={{ position: 'relative', display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
        <motion.div
          style={{ position: 'relative' }}
          animate={{ y: [0, 20, 0], transition: { duration: 3, repeat: Infinity } }} // Animation definition
        >
          <Image src={'/images/hero.webp'} width={150} height={150} alt='hero icon' className='hero-image' />
          <div className="speech-bubble">
            {messages[messageIndex]}
          </div>
        </motion.div>
      </div>
      <Particles />
      <style jsx>{`
        .speech-bubble {
          position: absolute;
          top: -30px;
          left: 160px;
          background-color: #ffffff;
          border-radius: 5px;
          padding: 10px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
          color:#000
        }
        .hero {
            position: absolute;
            right: 0;
            
        }
      `}</style>
    </section>
  );
};

export default Hero;