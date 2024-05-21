import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const events = [
    {
        year: "2014",
        title: "Started High School",
        description: "In 2014, I began my high school journey at EES74 Anexo el Boquerón in Argentina. It was a period of significant growth and learning, setting the foundation for my academic and personal development.",
    },
    {
        year: "2020",
        title: "Graduated High School",
        description: "After six years of dedication and hard work, I graduated from EES74 Anexo el Boquerón in 2020. My time in high school was marked by memorable experiences and valuable lessons that prepared me for future challenges.",
    },
    {
        year: "2022",
        title: "Start Online Courses",
        description: "In 2022, my interest in programming blossomed, leading me to enroll in online Python courses. Through these courses, I gained a strong foundation in programming basics, sparking a passion for coding and technology.",
    },
    {
        year: "2023",
        title: "Started University",
        description: "In 2023, I took a significant step forward in my education by enrolling at the National Technological University (Universidad Tecnológica Nacional). This marked the beginning of my formal education in technology and web development.",
        subEvents: [
            {
                subYear: "2023",
                subTitle: "Initiation to Web Development with JavaScript",
                subDescription: "In May 2023, I started a course on web development with JavaScript. During this course, I learned the fundamentals of web programming, including HTML, CSS, and JavaScript. I also explored design tools like Figma and server-side programming with NodeJS. This course concluded in June 2023.",
                certificate: "/images/certifications/certificado1.png",
            },
            {
                subYear: "2023",
                subTitle: "Web Development with NextJS",
                subDescription: "Following my initial web development course, I pursued advanced studies in web development with NextJS in August 2023. Here, I mastered React and NextJS, delved into TypeScript, and built a solid foundation in full-stack web application development. I also gained experience with backend tools like PrismaORM for database management and began developing my first full-stack projects.",
                certificate: "/images/certifications/certificado2.png",
            },
        ],
    },
    {
        year: "2024",
        title: "Started First Job",
        description: "In January 2024, I embarked on my professional career by starting my first job as a web developer. In this role, I significantly improved my programming skills by developing a full-stack web application for a client in Colombia. This experience has been instrumental in my growth as a developer. For more details on my professional experience, please visit my Experience page.",
    },
];

const EducationTimeline = () => {
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const position = window.pageYOffset;
            setScrollPosition(position);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="timelineContainer">
            <div className="timeline">
                {events.map((event, index) => (
                    <div
                        key={index}
                        className={`timelineEvent ${scrollPosition > index * 200 ? "visible" : ''}`}
                    >
                        <div className="timelineContent scroller">
                            <h3>{event.year}</h3>
                            <h4>{event.title}</h4>
                            <p>{event.description}</p>
                            {event.subEvents && event.subEvents.map((subEvent, subIndex) => (
                                <div key={subIndex} className="subEvent">
                                    <h5>{subEvent.subYear} - {subEvent.subTitle}</h5>
                                    <p>{subEvent.subDescription}</p>
                                    <div className="certificate">
                                        <Image src={subEvent.certificate} alt={`${subEvent.subTitle} Certificate`} width={200} height={150} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            <style jsx>{`
                .timelineContainer {
                    position: relative;
                    padding: 50px 0;
                    background-color: #121212;
                    color: #f5f5f5;
                }

                .timeline {
                    position: relative;
                    max-width: 600px;
                    margin: 0 auto;
                    padding: 0 20px;
                }

                .timelineEvent {
                    position: relative;
                    opacity: 0;
                    transform: translateY(50px);
                    transition: all 0.5s ease-out;
                }

                .timelineEvent.visible {
                    opacity: 1;
                    transform: translateY(0);
                }

                .timelineContent {
                    padding: 20px;
                    background: #1e1e1e;
                    border-radius: 8px;
                    margin-bottom: 20px;
                    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
                    overflow: auto;
                    max-height: 400px; /* Set a fixed height for all cards */
                }

                .timelineContent h3 {
                    margin: 0;
                    font-size: 1.5rem;
                    color: #655FDF;
                }

                .timelineContent h4 {
                    margin: 10px 0;
                    font-size: 1.2rem;
                    color: #f5f5f5;
                }

                .timelineContent p {
                    font-size: 1rem;
                    color: #cfcfcf;
                }

                .subEvent {
                    margin-top: 10px;
                    color: #f5f5f5;
                }

                .subEvent h5 {
                    margin: 0;
                    font-size: 1.1rem;
                    color: #655FDF;
                }

                .certificate {
                    margin-top: 10px;
                }

                /* Custom scrollbar styles */
                .timelineContent::-webkit-scrollbar {
                    width: 12px;
                }

                .timelineContent::-webkit-scrollbar-track {
                    background: #fff;
                }

                .timelineContent::-webkit-scrollbar-thumb {
                    background-color: #655FDF;
                    border-radius: 6px;
                }

                /* Ensure all cards are the same size with scrollable content */
                .timelineContent {
                    max-height: 400px; /* Ensure all cards are the same height */
                    overflow-y: auto;
                }

                /* Animation styles */
                .scroller {
                    animation: mask-up;
                    animation-timeline: scroll(self);
                    animation-range: 0 1rem;
                    mask-composite: exclude;
                }

                @keyframes mask-up {
                    to { mask-size: 100% 120px, 100% 100%; }
                }
            `}</style>
        </div>
    );
};

export default EducationTimeline;
