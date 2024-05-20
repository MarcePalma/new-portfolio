import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { NodeJS, Prisma, VSCode, Design, ReactIcon, NextJSIcon, JavascriptIcon, HTML5Icon, CSSIcon, TailwindCSSIcon } from "./icons.jsx";
import Hero from './hero.tsx';
import Typed from 'typed.js';

export default function ProfileCard() {
    const [activeTab, setActiveTab] = useState('tab1');
    const [isLightMode, setIsLightMode] = useState(false);
    const [isAnimationActive, setIsAnimationActive] = useState(false);
    const [animations, setAnimations] = useState([
        "!DOCTYPE html>",
        "meta charset=UTF-8/>",
        "hello world!",
        "01101001 01100001",
        "2(2x−3)=2x−10",
        "console.log('Hello, world!')",
        "for (let i = 0; i < 5; i++) { console.log(`Iteration ${i}`); }",
        "const PI = 3.14159;",
        "function factorial(n) { return n <= 1 ? 1 : n * factorial(n - 1); }",
        "const array = [1, 2, 3, 4, 5];",
        "const sum = array.reduce((acc, curr) => acc + curr, 0);",
        "const isPrime = (num) => { for(let i = 2; i <= Math.sqrt(num); i++) { if(num % i === 0) return false; } return num > 1; };",
        "class Animal { constructor(name) { this.name = name; } speak() { console.log(`${this.name} makes a noise`); } }",
        "class Dog extends Animal { constructor(name) { super(name); } speak() { console.log(`${this.name} barks`); } }",
        "const fetchUser = async (userId) => { try { const response = await fetch(`https://api.example.com/users/${userId}`); const user = await response.json(); return user; } catch (error) { console.error('Error fetching user:', error); } };",
        "const express = require('express'); const app = express(); app.get('/', (req, res) => { res.send('Hello World!'); }); app.listen(3000, () => { console.log('Server listening on port 3000'); });",
        "const fibonacci = (n) => { if (n <= 1) return n; return fibonacci(n - 1) + fibonacci(n - 2); };",
        "const palindrome = (str) => { return str === str.split('').reverse().join(''); };",
    ]);

    const toggleLightMode = () => {
        setIsLightMode(!isLightMode);
    };

    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
    };

    const startAnimation = () => {
        setIsAnimationActive(true);
    };

    useEffect(() => {
        if (isAnimationActive) {
            const typedInstances = animations.map((text, index) => {
                const uniqueId = `coder-animation-${index}`;
                const options = {
                    strings: [text],
                    typeSpeed: 50,
                    showCursor: false,
                };
                return new Typed(`#${uniqueId}`, options);
            });

            // Detener las instancias después de 5 segundos
            setTimeout(() => {
                typedInstances.forEach(instance => instance.destroy());
                setIsAnimationActive(false);
            }, 5000);
        }
    }, [isAnimationActive, animations]);

    useEffect(() => {
        if (isAnimationActive) {
            const handleResize = () => {
                const windowHeight = window.innerHeight;
                const windowWidth = window.innerWidth;
                const elements = document.querySelectorAll('.coder-animation');
                elements.forEach((element) => {
                    const textWidth = element.offsetWidth;
                    const textHeight = element.offsetHeight;
                    const margin = 50; // Margen mínimo para mantener el texto visible

                    // Solo ajustar la posición si el texto cabe dentro de la ventana
                    if (textWidth < windowWidth && textHeight < windowHeight) {
                        const top = Math.min(windowHeight - textHeight - margin, Math.max(margin, Math.random() * (windowHeight - textHeight)));
                        const left = Math.min(windowWidth - textWidth - margin, Math.max(margin, Math.random() * (windowWidth - textWidth)));
                        element.style.top = `${top}px`;
                        element.style.left = `${left}px`;
                    }
                });
            };

            handleResize(); // Ajustar posiciones una vez al inicio

            // Escuchar el evento de redimensionamiento de la ventana
            window.addEventListener('resize', handleResize);

            // Remover el listener cuando el componente se desmonte
            return () => {
                window.removeEventListener('resize', handleResize);
            };
        }
    }, [isAnimationActive]);


    return (
        <div className={`font-manrope ${isLightMode ? 'bg-white text-black' : 'bg-[#121212] text-[#E6E9EB]'} flex justify-center flex-col h-screen select-none relative transition-all duration-500`}>
            <div className='absolute top-20 left-0 w-full'>
                <Hero />
            </div>
            <div className={`profile bg-[#23262D] p-4 rounded-lg shadow-md w-full max-w-[28rem] min-w-[20rem] mx-auto gap-3 flex flex-col items-center justify-between relative ${isLightMode ? 'bg-gray-200' : ''} transition-all duration-500`}>
                <header className='profile-header flex justify-between items-start w-full gap-3'>
                    <button onClick={toggleLightMode} className={`profile-highlight p-2 rounded-lg font-semibold w-full flex items-center justify-center gap-1 ${isLightMode ? 'bg-[#8993aa]' : 'bg-[#34393F] '} border border-[#42474D] transition-all duration-300 hover:bg-[#555a60]`}>
                        <Design />
                        Design
                    </button>
                    <div className='profile-avatar flex-grow max-w-[8rem] min-w-[5rem]'>
                        <Image src={"/images/profile.webp"} width={1332} height={744} loading='lazy' alt='Profile picture' className='relative w-full rounded-xl object-cover mt-[-50%] transition-all duration-500' />
                    </div>
                    <button onClick={startAnimation} className={`profile-highlight p-2 rounded-lg font-semibold w-full flex items-center justify-center gap-1 ${isLightMode ? 'bg-[#8993aa]' : 'bg-[#34393F] '} border border-[#42474D] transition-all duration-300 hover:bg-[#555a60]`} disabled={isAnimationActive}>
                        <VSCode />
                        Coder
                    </button>
                </header>
                <div className='profile-name flex flex-col items-center text-center gap-1'>
                    <h2 className='flex items-center text-xl gap-2'>
                        Marcelo Palma
                        <Image src={"/images/icons/verified.webp"} width={32} height={32} alt='verified icon' />
                    </h2>
                    <p className={`text-[1.05rem] ${isLightMode ? 'text-black' : 'text-[#E0E3EA] '}`}>Frontend/Fullstack web developer</p>
                </div>
                <ul className='social-links flex justify-center w-full list-none gap-4 mt-2'>
                    <li>
                        <Link href={"https://twitter.com/SeyyTT"} target='_blank' className={`flex items-center justify-center w-[3rem] h-[3rem] ${isLightMode ? 'bg-[#8993aa]' : 'bg-[#343841]'} rounded-lg border border-[#42474D] p-2 transition-all duration-300 hover:scale-105`}>
                            <Image src={"/images/icons/X_icon.svg"} width={32} height={32} />
                        </Link>
                    </li>
                    <li>
                        <Link href={"https://github.com/MarcePalma"} target='_blank' className={`flex items-center justify-center w-[3rem] h-[3rem] ${isLightMode ? 'bg-[#8993aa]' : 'bg-[#343841]'} rounded-lg border border-[#42474D] p-2 transition-all duration-300 hover:scale-105`}>
                            <Image src={"/images/icons/github-color.svg"} width={32} height={32} />
                        </Link>
                    </li>
                    <li>
                        <Link href={"https://www.linkedin.com/in/marcelo-palma-6507b926a/"} target='_blank' className={`flex items-center justify-center w-[3rem] h-[3rem] ${isLightMode ? 'bg-[#8993aa]' : 'bg-[#343841]'} rounded-lg border border-[#42474D] p-2 transition-all duration-300 hover:scale-105`}>
                            <Image src={"/images/icons/linkedin-svgrepo-com.svg"} width={32} height={32} />
                        </Link>
                    </li>
                </ul>
                <main className='w-full flex flex-col gap-4'>
                    <div className="tabs-wrapper overflow-x-auto pb-0.25rem">
                        <ul className="tabs flex border border-[#42474D] rounded-lg min-h-[3rem] relative">
                            <li className={activeTab === 'tab1' ? 'active' : ''}>
                                <a id="tab1" href="#about" onClick={() => handleTabClick('tab1')} className='flex items-center justify-center py-3 px-4 rounded-lg transition-all duration-300 focus:outline-none hover:bg-[#34393F]'>
                                    About me
                                </a>
                            </li>
                            <li className={activeTab === 'tab2' ? 'active' : ''}>
                                <a id="tab2" href="#skills" onClick={() => handleTabClick('tab2')} className='flex items-center justify-center py-3 px-4 rounded-lg transition-all duration-300 focus:outline-none hover:bg-[#34393F]'>
                                    Skills
                                </a>
                            </li>
                            <li className={activeTab === 'tab3' ? 'active' : ''}>
                                <a id="tab3" href="#Languages" onClick={() => handleTabClick('tab3')} className='flex items-center justify-center py-3 px-4 rounded-lg transition-all duration-300 focus:outline-none hover:bg-[#34393F]'>
                                    Languages
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div id="tab1-content" className={`tab-content ${activeTab === 'tab1' ? 'tab-content--active' : 'hidden'}`} style={{ height: '250px', overflow: 'auto' }}>
                        <p>
                            I am a full-stack developer with over a year of experience. I have a passion for modern web technologies and love to share my knowledge with others.
                        </p>
                        <h3 className='mt-4'>I can help with &#128588;</h3>
                        <ul className="content-links flex flex-col gap-2 mt-2">
                            <li>
                                <a href="#web-dev" className={`flex items-center rounded-lg ${isLightMode ? 'bg-[#8993aa]' : 'bg-[#343841]'} border border-[#42474D] p-2 transition-all duration-300 hover:bg-[#555a60]`}>
                                    Web Development <HTML5Icon /> <CSSIcon /> <JavascriptIcon />
                                </a>
                            </li>
                            <li>
                                <a href="#front-end" className={`flex items-center rounded-lg ${isLightMode ? 'bg-[#8993aa]' : 'bg-[#343841]'} border border-[#42474D] p-2 transition-all duration-300 hover:bg-[#555a60]`}>
                                    Front-end Frameworks <ReactIcon /> <NextJSIcon />
                                </a>
                            </li>
                            <li>
                                <a href="#back-end" className={`flex items-center rounded-lg ${isLightMode ? 'bg-[#8993aa]' : 'bg-[#343841]'} border border-[#42474D] p-2 transition-all duration-300 hover:bg-[#555a60]`}>
                                    Back-end Development <NodeJS /> <Prisma />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div id="tab2-content" className={`tab-content ${activeTab === 'tab2' ? 'tab-content--active' : 'hidden'}`} style={{ height: '250px', overflow: 'auto' }}>
                        <ul className="content-links flex flex-col gap-2">
                            <li>
                                <a href="#html-css" className={`flex items-center rounded-lg ${isLightMode ? 'bg-[#8993aa]' : 'bg-[#343841]'} border border-[#42474D] p-2 transition-all duration-300 hover:bg-[#555a60]`}>HTML, CSS <HTML5Icon /> <CSSIcon /></a>
                            </li>
                            <li>
                                <a href="#tailwind" className={`flex items-center rounded-lg ${isLightMode ? 'bg-[#8993aa]' : 'bg-[#343841]'} border border-[#42474D] p-2 transition-all duration-300 hover:bg-[#555a60]`}>Tailwind <TailwindCSSIcon /></a>
                            </li>
                            <li>
                                <a href="#javascript" className={`flex items-center rounded-lg ${isLightMode ? 'bg-[#8993aa]' : 'bg-[#343841]'} border border-[#42474D] p-2 transition-all duration-300 hover:bg-[#555a60]`}>JavaScript <JavascriptIcon /></a>
                            </li>
                            <li>
                                <a href="#react-and-nextjs" className={`flex items-center rounded-lg ${isLightMode ? 'bg-[#8993aa]' : 'bg-[#343841]'} border border-[#42474D] p-2 transition-all duration-300 hover:bg-[#555a60]`}>React and Next.js <ReactIcon /> <NextJSIcon /></a>
                            </li>
                            <li>
                                <a href="#nodejs" className={`flex items-center rounded-lg ${isLightMode ? 'bg-[#8993aa]' : 'bg-[#343841]'} border border-[#42474D] p-2 transition-all duration-300 hover:bg-[#555a60]`}>Node.js (REST) <NodeJS /></a>
                            </li>
                            <li>
                                <a href="prisma" className={`flex items-center rounded-lg ${isLightMode ? 'bg-[#8993aa]' : 'bg-[#343841]'} border border-[#42474D] p-2 transition-all duration-300 hover:bg-[#555a60]`}>Prisma SQL, PostgreSQL <Prisma /></a>
                            </li>
                        </ul>
                    </div>
                    <div id="tab3-content" className={`tab-content ${activeTab === 'tab3' ? 'tab-content--active' : 'hidden'}`} style={{ height: '250px', overflow: 'auto' }}>
                        <h2 className="text-lg font-semibold mb-2">Languages</h2>
                        <ul className="language-list">
                            <li>
                                <span className="language">English:</span> Advanced (Level C1)
                            </li>
                            <li>
                                <span className="language">Español:</span> Nativo (Nivel C2)
                            </li>
                        </ul>
                    </div>
                </main>
                <a href="/" className='btn btn--primary w-full bg-[#655FDF] hover:bg-[#3A45EF] rounded-full py-2 px-4 mt-8 text-center transition-all duration-300 hover:scale-105'>Hire me</a>
            </div>
            {isAnimationActive && animations.map((text, index) => (
                <div key={index} className="coder-animation overflow-hidden" id={`coder-animation-${index}`}>
                    <span className={`coder-animation-text`}></span>
                </div>
            ))}
            <style>
                {`
                    .tab-content::-webkit-scrollbar {
                        width: 12px;
                    }
                    .tab-content::-webkit-scrollbar-track {
                        background: #fff;
                    }
                    .tab-content::-webkit-scrollbar-thumb {
                        background-color: #655FDF;
                        border-radius: 6px;
                    }
                    .tabs .active {
                        background-color: #655FDF;
                        color: #fff;
                    }
                    .language-list {
                        list-style-type: none;
                        padding-left: 0;
                    }
                    .language {
                        font-weight: bold;
                    }

                    .container {
                        position: relative;
                        width: 100%;
                        height: 100vh;
                    }

                    .coder-animation {
                        position: absolute;
                        font-size: 1rem;
                        animation: appear 0.5s ease forwards, disappear 0.5s ease forwards 4.5s;
                        opacity: 0;
                        color:#3DED97;
                    }

                    @keyframes appear {
                        from {
                            opacity: 0;
                        }
                        to {
                            opacity: 1;
                        }
                    }

                    @keyframes disappear {
                        from {
                            opacity: 1;
                        }
                        to {
                            opacity: 0;
                        }
                    }
                `}
            </style>
        </div>
    );
}
