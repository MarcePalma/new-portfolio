import React from 'react';
import { HomeIcon } from './icons';
import Link from 'next/link';
import Lines from './Lines';
import { LeftArrow } from './icons';
import { useRouter } from 'next/router';
import InterfaceIcons from './InterfaceIcons';

export default function Navbar() {
    const router = useRouter();

    const handleClickBack = () => {
        router.back(); // Redirige a la página anterior
    };

    return (
        <>
        <InterfaceIcons/>
            <Lines />
            <nav className='fixed bottom-0 left-0 w-full bg-gray-900 text-white py-2 rounded-t-lg' style={{ zIndex: '9999' }}>
                <ul className='flex justify-center'>
                    {router.pathname !== '/' && (
                        <li>
                            <button onClick={handleClickBack}>
                                <LeftArrow />
                            </button>
                        </li>
                    )}
                    <li>
                        <Link href="/" className='flex items-center justify-center'>
                            <HomeIcon />
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    );
}