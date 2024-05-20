import React from 'react';
import EducationTimeline from '@/components/education/EducationTimeline';
import ProgressBar from '@/components/education/ProgressBar';
import Character from '@/components/education/Hero';
import ParallaxSection from '@/components/education/ParallaxSection';

export default function EducationPage() {
  return (
    <div>
      <ParallaxSection image="/images/education-bg.jpg" strength={300}>
        <h1 style={{ color: '#fff', fontSize: '3rem', textAlign: 'center' }}>My Education Journey</h1>
      </ParallaxSection>
      <ProgressBar />
      <Character />
      <div style={{ padding: '50px 20px', backgroundColor: '#16191E', color: '#E6E9EB' }}>
        <EducationTimeline />
      </div>
    </div>
  );
}