import React, { useEffect, useState } from 'react';
import ParallaxHeader from '@/components/experience/ParallaxHeader';
import ProjectShowcase from '@/components/experience/ProjectShowcase';
import { motion } from "framer-motion"

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
        <motion.div className="experience-page bg-[#121212]"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}>
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
                description="Queen Nails Spa is a full-stack application built with NextJS, TypeScript, Prisma, AWS services, and PostgreSQL. It features a landing page, an appointment scheduling system, a sales page, and an admin panel. The admin panel includes an agenda for manual user appointment scheduling, a calendar for managing available time slots, a publication management system for adding, editing, and deleting posts, an automatic removal system for past schedules or agendas, and a homepage editor for image and title customization."
                technologies={['NextJS', 'TypeScript', 'Prisma', 'AWS', 'PostgreSQL']}
                duration="January - March 2024"
            />
            <ProjectShowcase
                title="MarketApp"
                images={[
                    { src: '/images/experience/page-2.png', description: 'Home Page' },
                    { src: '/images/experience/page2-1.png', description: 'Stock' },
                    { src: '/images/experience/page-2-2.png', description: 'Sales' },
                    { src: '/images/experience/page-2-3.png', description: 'Income Reports' },
                ]}
                description="MarketApp is a full-stack application built with Nextron, NextJS, TypeScript, PrismaORM, and SQL. It's designed to manage business operations efficiently, providing various features tailored for business administration. The app includes an inventory management system with barcode scanning capabilities, allowing users to add and manage stock items. It also features a sales module with a built-in calculator, barcode scanner, and a compact stock list for efficient sales processing. Additionally, MarketApp offers an income reporting feature, allowing users to generate income reports by day, week, and month, as well as track expenses for income comparison."
                technologies={['Nextron', 'NextJS', 'TypeScript', 'Prisma', 'SQL']}
                duration="March - May 2024"
            />

            <style jsx>{`
                .experience-page {
                    padding: 20px;
                    overflow-y: scroll;
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
        </motion.div>
    );
}
