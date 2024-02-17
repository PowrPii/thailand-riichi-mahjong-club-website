import React, { useState, useEffect } from 'react';
import NavBar from '../components/NavigationBar';
import NavigationMenu from '../components/NavigationMenu';
import { SignedOut } from '@clerk/clerk-react';

const Home: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'visible';
        }
    }, [isMenuOpen]);

    return (
        <>
            <NavBar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
            <NavigationMenu isOpen={isMenuOpen} />
            <div className='flex flex-col md:flex-row items-center p-4'>
                <div className="flex flex-col justify-center h-svh">
                    <h1 className="text-4xl md:text-6xl p-5 font-bold md:mx-32">Thailand Riichi Mahjong Club</h1>
                    <p className='p-5 text-xl text-justify text-gray-700 md:mx-32'>
                        Established in 2023, Thailand Riichi Mahjong Club (TRMC) unites Japanese Mahjong enthusiasts among Thai. Gathing both offline and online during our free time to learn and play <i>riichi</i> to improve on our srategic thinking and problem solving and more!
                    </p>
                    <SignedOut>
                        <div className='flex w-150 p-4 md:mx-32'>
                            <a href="/sign-up" className='p-2 px-4 bg-blue-600 rounded-md text-white font-semibold'>Join Us</a>
                            <a href="/sign-in" className='p-2 px-4 font-semibold'>Sign In</a>
                        </div>
                    </SignedOut> 
                </div>
            </div>
        </>
    );
};

export default Home;