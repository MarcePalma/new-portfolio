import React, { useEffect, useState } from 'react';
import ParallaxHeader from '@/components/experience/ParallaxHeader';
import ProjectShowcase from '@/components/experience/ProjectShowcase';

export default function ExperiencePage() {
    const [years, setYears] = useState(0);

    useEffect(() => {
        let start = 0;
        const end = 1;
        const duration = 1000;
        const stepTime = Math.abs(Math.floor(duration / (end - start)));

        const timer = setInterval(() => {
            start += 1;
            setYears(start);
            if (start === end) clearInterval(timer);
        }, stepTime);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="experience-page bg-[#121212]">
            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap');
            `}</style>
            <ParallaxHeader image="/images/experience-bg.png" strength={300}>
                <h1 className="experience-title">My Professional Experience</h1>
                <div className="experience-counter">
                    <span id="experience-years">{years}</span> years of experience
                </div>
            </ParallaxHeader>
            <ProjectShowcase
                title="Queen Nails Spa"
                images={[
                    { src: '/images/experience/page.png', description: 'Home page' },
                    { src: '/images/experience/page1.png', description: 'Business Hours' },
                    { src: '/images/experience/page2.png', description: 'Appointment Booking' },
                    { src: '/images/experience/page3.png', description: 'Publication Forum' },
                    { src: '/images/experience/page4.png', description: 'Admin Panels' }
                ]}
                description="Queen Nails Spa is a full-stack application built with NextJS, TypeScript, Prisma, AWS services, and PostgreSQL. It includes features such as appointment booking, a forum for posts, payment pages, and admin panels."
                technologies={['NextJS', 'TypeScript', 'Prisma', 'AWS', 'PostgreSQL']}
                duration="January - March 2024"
            />
            <ProjectShowcase
                title="MarketApp"
                images={[
                    { src: '/images/experience/page-2.png', description: 'Login page' },
                    { src: '/images/experience/page2-1.png', description: 'Appointment Booking' },
                    { src: '/images/experience/page-2-2.png', description: 'Publication Forum' },
                    { src: '/images/experience/page-2-3.png', description: 'Payment Pages' },
                ]}
                description="MarketApp is a full-stack application built with Nextron, NextJS, TypeScript, PrismaORM, and SQL. It includes features such as appointment booking, a forum for posts, payment pages, and admin panels."
                technologies={['Nextron', 'NextJS', 'TypeScript', 'Prisma', 'SQL']}
                duration="March - May 2024"
            />
            <style jsx>{`
                .experience-page {
                    padding: 20px;
                    overflow-y: scroll; /* Permitir desplazamiento vertical */
                }

                .experience-title {
                    color: #fff;
                    font-size: 3rem;
                    text-align: center;
                    font-family: 'Outfit', sans-serif;
                }

                .experience-counter {
                    font-size: 2rem;
                    color: #fff;
                    text-align: center;
                    margin-top: 10px;
                }
            `}</style>
        </div>
    );
}
