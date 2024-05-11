import React from 'react';
import { HomeIcon } from './icons';
import Link from 'next/link';
import Lines from './Lines';

export default function Navbar() {
    return (
        <>
            <Lines />
            <nav className='fixed bottom-0 left-0 w-full bg-gray-900 text-white py-2 rounded-t-lg'>
                <ul className='flex justify-around'>
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
