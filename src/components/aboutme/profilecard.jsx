'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react';
import { NodeJS, Prisma, VSCode, Design, ReactIcon, NextJSIcon, JavascriptIcon, HTML5Icon, CSSIcon, TailwindCSSIcon } from "./icons.jsx"
import Hero from './hero.tsx';

export default function ProfileCard() {
    const [activeTab, setActiveTab] = useState('tab1');
    const [isLightMode, setIsLightMode] = useState(false);

    const toggleLightMode = () => {
        setIsLightMode(!isLightMode);
    };

    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
    };

    return (
        <div className={`font-manrope ${isLightMode ? 'bg-white text-black' : 'bg-[#16191E] text-[#E6E9EB]'} flex justify-center flex-col h-screen select-none relative`}>
            <div className={`profile bg-[#23262D] p-4 rounded-lg shadow-md w-full max-w-[28rem] min-w-[20rem] mx-auto gap-3 flex flex-col items-center justify-between relative ${isLightMode ? 'bg-gray-200' : ''}`}>
                <header className='profile-header flex justify-between items-start w-full gap-3'>
                    <button onClick={toggleLightMode} className={`profile-highlight p-2 rounded-lg font-semibold w-full flex items-center justify-center gap-1 ${isLightMode ? 'bg-[#8993aa]' : 'bg-[#34393F] '} border border-[#42474D]`}>
                        <Design />
                        Design
                    </button>
                    <div className='profile-avatar flex-grow max-w-[8rem] min-w-[5rem]'>
                        <Image src={"/images/profile.webp"} width={1332} height={744} loading='lazy' alt='Profile picture' className='relative w-full rounded-xl object-cover mt-[-50%]' />
                    </div>
                    <div className={`profile-highlight p-2 rounded-lg font-semibold w-full flex items-center justify-center gap-1 ${isLightMode ? 'bg-[#8993aa]' : 'bg-[#34393F] '} border border-[#42474D]`}>
                        <VSCode />
                        Coder
                    </div>
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
                        <Link href={"https://twitter.com/SeyyTT"} target='_blank' className={`flex items-center justify-center w-[3rem] h-[3rem] ${isLightMode ? 'bg-[#8993aa]' : 'bg-[#343841]'} rounded-lg border border-[#42474D] p-2 transition-all duration-300`}>
                            <Image src={"/images/icons/X_icon.svg"} width={32} height={32} />
                        </Link>
                    </li>
                    <li>
                        <Link href={"https://github.com/MarcePalma"} target='_blank' className={`flex items-center justify-center w-[3rem] h-[3rem] ${isLightMode ? 'bg-[#8993aa]' : 'bg-[#343841]'} rounded-lg border border-[#42474D] p-2 transition-all duration-300`}>
                            <Image src={"/images/icons/github-color.svg"} width={32} height={32} />
                        </Link>
                    </li>
                    <li>
                        <Link href={"https://www.linkedin.com/in/marcelo-palma-6507b926a/"} target='_blank' className={`flex items-center justify-center w-[3rem] h-[3rem] ${isLightMode ? 'bg-[#8993aa]' : 'bg-[#343841]'} rounded-lg border border-[#42474D] p-2 transition-all duration-300`}>
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
                            <li className={activeTab === 'tab3' ? 'active' : ''}></li>
                            <a id="tab3" href="#Languages" onClick={() => handleTabClick('tab3')} className='flex items-center justify-center py-3 px-4 rounded-lg transition-all duration-300 focus:outline-none hover:bg-[#34393F]'>
                                Languages
                            </a>
                        </ul>
                    </div>
                    <div id="tab1-content" className={`tab-content ${activeTab === 'tab1' ? 'tab-content--active' : 'hidden'}`} style={{ height: '250px', overflow: 'auto' }}>
                        <p>
                            I am a full-stack developer with +1 years of experience. I have a passion for modern web technologies and love to share my knowledge with others.
                        </p>
                        <h3 className='mt-4'>I can help with &#128588;</h3>
                        <ul className="content-links flex flex-col gap-2 mt-2">
                            <li>

                                <a href="#web-development" className={`flex items-center rounded-lg ${isLightMode ? 'bg-[#8993aa]' : 'bg-[#343841]'} border border-[#42474D] p-2 transition-all duration-300`}>Web development</a>
                            </li>
                            <li>
                                <a href="#coding-tips" className={`flex items-center rounded-lg ${isLightMode ? 'bg-[#8993aa]' : 'bg-[#343841]'} border border-[#42474D] p-2 transition-all duration-300`}>Coding tips</a>
                            </li>
                        </ul>
                    </div>
                    <div id="tab2-content" className={`tab-content ${activeTab === 'tab2' ? 'tab-content--active' : 'hidden'}`} style={{ height: '250px', overflow: 'auto' }}>
                        <p>
                            My content is focused on the latest web development technologies and tools. Here is the overview 👨‍💻
                        </p>
                        <ul className="content-links flex flex-col gap-2 mt-2">
                            <li>
                                <a href="#html-css" className={`flex items-center rounded-lg ${isLightMode ? 'bg-[#8993aa]' : 'bg-[#343841]'} border border-[#42474D] p-2 transition-all duration-300`}>HTML, CSS <HTML5Icon /> <CSSIcon /></a>
                            </li>
                            <li>
                                <a href="#tailwind" className={`flex items-center rounded-lg ${isLightMode ? 'bg-[#8993aa]' : 'bg-[#343841]'} border border-[#42474D] p-2 transition-all duration-300`}>Tailwind <TailwindCSSIcon /></a>
                            </li>
                            <li>
                                <a href="#javascript" className={`flex items-center rounded-lg ${isLightMode ? 'bg-[#8993aa]' : 'bg-[#343841]'} border border-[#42474D] p-2 transition-all duration-300`}>JavaScript <JavascriptIcon /></a>
                            </li>
                            <li>
                                <a href="#react-and-nextjs" className={`flex items-center rounded-lg ${isLightMode ? 'bg-[#8993aa]' : 'bg-[#343841]'} border border-[#42474D] p-2 transition-all duration-300`}>React and Next.js <ReactIcon /> <NextJSIcon /></a>
                            </li>
                            <li>
                                <a href="#nodejs" className={`flex items-center rounded-lg ${isLightMode ? 'bg-[#8993aa]' : 'bg-[#343841]'} border border-[#42474D] p-2 transition-all duration-300`}>Node.js (REST) <NodeJS /></a>
                            </li>
                            <li>
                                <a href="prisma" className={`flex items-center rounded-lg ${isLightMode ? 'bg-[#8993aa]' : 'bg-[#343841]'} border border-[#42474D] p-2 transition-all duration-300`}>Prisma SQL, PostgreSQL <Prisma /></a>
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
                <a href="/" className='btn btn--primary w-full bg-[#655FDF] hover:bg-[#3A45EF] rounded-full py-2 px-4 mt-8 text-center transition-all duration-300'>Hire me</a>
            </div>
            <style>
                {
                    `
                    .tab-content::-webkit-scrollbar {
                        width: 12px;
                      }
                      
                      .tab-content::-webkit-scrollbar-track {
                        background: #fff;
                      }
                      
                      .tab-content::-webkit-scrollbar-thumb {
                        background-color:#655FDF ;
                        border-radius: 6px;
                      }

                    `
                }
            </style>
            <Hero />

        </div>
    );
}