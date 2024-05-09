import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function ProfileCard() {
    return (
        <div className='profile'>
            <header className='profile-header'>
                <div className='profile-highlight wrapper'>
                    <div className='profile-highlight'>
                        <svg
                            width="32"
                            height="32"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="#ffffff"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round">
                            <path
                                stroke="none"
                                d="M0 0h24v24H0z"
                                fill="none" />
                            <path
                                d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                            <path
                                d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
                        </svg>
                    </div>

                    Design
                </div>
                <div className='profile-avatar'>
                    <Image src={"/images/profile.webp"} loading='lazy' alt='Profile picture' />
                </div>
            </header>
            <div className='profile-name'>
                <h2>Marcelo Palma <Image src={"/images/icons/verified.webp"} alt='verified icon' /></h2>
                <p>Frontend/Fullstack web developer</p>
            </div>
            <ul className='social-links'>
                <li>
                    <Link href={"https://twitter.com/SeyyTT"} target='_blank'>
                        <Image src={"/images/icons/X_icon.svg"} />
                    </Link>
                </li>
                <li>
                    <Link href={"https://github.com/MarcePalma"} target='_blank' >
                        <Image src={"/images/icons/github-color.svg"} />
                    </Link>
                </li>
                <li>
                    <Link href={}>
                        <Image src={"/images/icons/"}/>
                    </Link>

                </li>
            </ul>
        </div>
    )
}
