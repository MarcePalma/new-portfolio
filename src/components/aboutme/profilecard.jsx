'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react';

export default function ProfileCard() {
    const [activeTab, setActiveTab] = useState('tab1');

    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
    };

    return (
        <div className='font-manrope bg-[#16191E] text-[#E6E9EB] flex justify-center flex-col h-screen select-none relative'>
            <div className='profile bg-[#23262D] p-4 rounded-lg shadow-md w-full max-w-[28rem] min-w-[20rem] mx-auto gap-3 flex flex-col items-center justify-between relative'>
                <header className='profile-header flex justify-between items-start w-full gap-3'>
                    <div className='profile-highlight p-2 rounded-lg font-semibold w-full flex items-center justify-center gap-1 bg-[#34393F] border border-[#42474D]'>
                        <svg
                            width="32"
                            height="32"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="#ffffff"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className='w-6 h-6'
                        >
                            <path
                                stroke="none"
                                d="M0 0h24v24H0z"
                                fill="none"
                            />
                            <path
                                d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"
                            />
                            <path
                                d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"
                            />
                        </svg>
                        Design
                    </div>
                    <div className='profile-avatar flex-grow max-w-[8rem] min-w-[5rem]'>
                        <Image src={"/images/profile.webp"} width={1332} height={744} loading='lazy' alt='Profile picture' className='relative w-full rounded-xl object-cover mt-[-50%]' />
                    </div>
                    <div className='profile-highlight p-2 rounded-lg font-semibold w-full flex items-center justify-center gap-1 bg-[#34393F] border border-[#42474D]'>
                        <svg
                            width="32"
                            height="32"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="#ffffff"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className='w-6 h-6'
                        >
                            <path
                                stroke="none"
                                d="M0 0h24v24H0z"
                                fill="none"
                            />
                            <path
                                d="M13 16v-8l2 5l2 -5v8"
                            />
                            <path
                                d="M1 16v-8"
                            />
                            <path
                                d="M5 8v8"
                            />
                            <path
                                d="M1 12h4"
                            />
                            <path
                                d="M7 8h4"
                            />
                            <path
                                d="M9 8v8"
                            />
                            <path
                                d="M20 8v8h3"
                            />
                        </svg>
                        Coder
                    </div>
                </header>
                <div className='profile-name flex flex-col items-center text-center gap-1'>
                    <h2 className='flex items-center text-xl gap-2'>
                        Marcelo Palma
                        <Image src={"/images/icons/verified.webp"} width={32} height={32} alt='verified icon' />
                    </h2>
                    <p className='text-[1.05rem] text-[#E0E3EA]'>Frontend/Fullstack web developer</p>
                </div>
                <ul className='social-links flex justify-center w-full list-none gap-4 mt-2'>
                    <li>
                        <Link href={"https://twitter.com/SeyyTT"} target='_blank' className='flex items-center justify-center w-[3rem] h-[3rem] bg-[#343841] rounded-lg border border-[#42474D] p-2 transition-all duration-300'>
                            <Image src={"/images/icons/X_icon.svg"} width={32} height={32} />
                        </Link>
                    </li>
                    <li>
                        <Link href={"https://github.com/MarcePalma"} target='_blank' className='flex items-center justify-center w-[3rem] h-[3rem] bg-[#343841] rounded-lg border border-[#42474D] p-2 transition-all duration-300'>
                            <Image src={"/images/icons/github-color.svg"} width={32} height={32} />
                        </Link>
                    </li>
                    <li>
                        <Link href={"https://www.linkedin.com/in/marcelo-palma-6507b926a/"} target='_blank' className='flex items-center justify-center w-[3rem] h-[3rem] bg-[#343841] rounded-lg border border-[#42474D] p-2 transition-all duration-300'>
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
                        </ul>
                    </div>
                    <div id="tab1-content" className={`tab-content ${activeTab === 'tab1' ? 'tab-content--active' : 'hidden'}`} style={{ height: '250px', overflow: 'auto' }}>
                        <p>
                            I am a full-stack developer with 10 years of experience at Google. For the past 5 years, I have been posting educational content on my blog and YouTube channel. I have a passion for modern web technologies and love to share my knowledge with others.
                        </p>
                        <h3 className='mt-4'>I can help with &#128588;</h3>
                        <ul className="content-links flex flex-col gap-2 mt-2">
                            <li>
                                <a href="#career" className='flex items-center rounded-lg bg-[#343841] border border-[#42474D] p-2 transition-all duration-300'>Career roadmap and advice</a>
                            </li>
                            <li>
                                <a href="#interview" className='flex items-center rounded-lg bg-[#343841] border border-[#42474D] p-2 transition-all duration-300'>Interview preparation</a>
                            </li>
                            <li>
                                <a href="#web-development" className='flex items-center rounded-lg bg-[#343841] border border-[#42474D] p-2 transition-all duration-300'>Web development</a>
                            </li>
                        </ul>
                    </div>
                    <div id="tab2-content" className={`tab-content ${activeTab === 'tab2' ? 'tab-content--active' : 'hidden'}`} style={{ height: '250px', overflow: 'auto' }}>
                        <p>
                            My content is focused on the latest web development technologies and tools. Here is the overview 👨‍💻
                        </p>
                        <ul className="content-links flex flex-col gap-2 mt-2">
                            <li>
                                <a href="#html-css" className='flex items-center rounded-lg bg-[#343841] border border-[#42474D] p-2 transition-all duration-300'>HTML, CSS</a>
                            </li>
                            <li>
                                <a href="#javascript" className='flex items-center rounded-lg bg-[#343841] border border-[#42474D] p-2 transition-all duration-300'>JavaScript</a>
                            </li>
                            <li>
                                <a href="#react-and-nextjs" className='flex items-center rounded-lg bg-[#343841] border border-[#42474D] p-2 transition-all duration-300'>React and Next.js</a>
                            </li>
                            <li>
                                <a href="#nodejs" className='flex items-center rounded-lg bg-[#343841] border border-[#42474D] p-2 transition-all duration-300'>Node.js (REST)</a>
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
        </div>
    );






}