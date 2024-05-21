import React from 'react';
import EducationTimeline from '@/components/education/EducationTimeline';
import ProgressBar from '@/components/education/ProgressBar';
import Character from '@/components/education/Hero';
import ParallaxSection from '@/components/education/ParallaxSection';

export default function EducationPage() {
  return (
    <div>
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
    </div>
  );
}