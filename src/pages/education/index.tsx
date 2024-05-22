import React from 'react';
import EducationTimeline from '@/components/education/EducationTimeline';
import ProgressBar from '@/components/education/ProgressBar';
import Character from '@/components/education/Hero';
import ParallaxSection from '@/components/education/ParallaxSection';
import { motion } from 'framer-motion'

export default function EducationPage() {
  return (
    <motion.div className="experience-page bg-[#121212]"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.5 }}>
      <ParallaxSection image="/images/education-bg.jpg" strength={300}>
        <h1 className='education-title'>My Education Journey</h1>
        <p className='education-title'>from 2014 to ∞ 🚀</p>
      </ParallaxSection>
      <ProgressBar />
      <Character />
      <div style={{ padding: '50px 20px', backgroundColor: '#16191E', color: '#E6E9EB' }}>
        <EducationTimeline />
      </div>
      <style jsx>{`
        .education-title {
          color: #fff;
          font-size: 3rem;
          text-align: center;
          font-family: 'Outfit', sans-serif;
        }
      `}</style>
    </motion.div>
  );
}