import React, { useState, useEffect } from 'react';
import NavBar from '../components/NavigationBar';
import NavigationMenu from '../components/NavigationMenu';
import Footer from '../components/Footer';

const About: React.FC = () => {
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
            <div className="flex flex-col h-svh justify-evenly p-4 bg-about-banner bg-cover bg-center bg-fixed bg-no-repeat  bg-gray-900 bg-blend-soft-light z-[15]" >
                <div className="flex flex-col md:w-[80%] text-white">
                    <h1 className="text-4xl md:text-6xl p-2 font-bold md:mx-32">TRMC</h1>
                    <h2 className="text-2xl md:text-2xl p-2 font-bold md:mx-32">Thailand Riichi Mahjong Club</h2>
                    <p className='p-2 text-xl text-justify md:mx-32 z-[10]'>
                        Established in 2023, Thailand Riichi Mahjong Club (TRMC) unites Japanese Mahjong enthusiasts among Thais. Gathing both offline and online during free time to learn and play <i>riichi</i> in order to improve on our strategic thinking, problem solving skills, patience, discipline and more!
                    </p>
                </div >
                <div className='flex flex-row gap-10 md:w-[80%] text-white self-center justify-self-start'>
                    <div className='border border-gray-700 bg-white/5 ring-white rounded-lg p-2 shadow-lg'>
                        <h2 className='text-xl font-semibold p-2'>Learn</h2>
                        <p className='text-justify p-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore, in minima officiis consequatur at earum, laboriosam nulla expedita perferendis dignissimos, enim eveniet error reiciendis doloremque!</p>
                    </div>
                    <div className='border border-gray-700 bg-white/5 ring-white rounded-lg p-2 shadow-lg'>
                        <h2 className='text-xl font-semibold p-2'>Play</h2>
                        <p className='text-justify p-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore, in minima officiis consequatur at earum, laboriosam nulla expedita perferendis dignissimos, enim eveniet error reiciendis doloremque!</p>
                    </div>
                    <div className='border border-gray-700 bg-white/5 ring-white rounded-lg p-2 shadow-lg'>
                        <h2 className='text-xl font-semibold p-2'>Review</h2>
                        <p className='text-justify p-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore, in minima officiis consequatur at earum, laboriosam nulla expedita perferendis dignissimos, enim eveniet error reiciendis doloremque!</p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default About;