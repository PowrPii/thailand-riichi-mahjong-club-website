import React, { useState } from 'react';
import Logo from '../images/logo.png';
import MenuButton from './MenuButton';

import { SignedOut, SignedIn, useUser, SignOutButton } from '@clerk/clerk-react';

const NavBarItem = "text-l font-semibold"
const NavList = 'mx-2'

interface NavBarProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

const NavBar: React.FC<NavBarProps> = ({ isMenuOpen, toggleMenu }) => {
  const { user } = useUser();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className='z-[50] top-0 sticky'>
      <nav className="flex justify-between items-center px-4 md:px-12 py-4 shadow-sm border-b border-grey-300">
        <div className='flex items-center basis-2/5 md:basis-1/5'>
          <MenuButton isOpen={isMenuOpen} toggleMenu={toggleMenu} />
          <img src={Logo} alt="Logo" width={50}/>
          <h1 className='font-bold text-2xl px-2'>TRMC</h1>
        </div>
        <div className="hidden md:flex justify-center basis-2/5 md:basis-1/5 md:w-4/5">
          <div className='flex justify-center space-x-4'>
            <ul className='flex items-center gap-4'>
              <li className={NavList}>
                <a href="/" className={NavBarItem}>Home</a>
              </li>
              <li className={NavList}>
                <a href="/about" className={NavBarItem}>About</a>
              </li>
              <li className={NavList}>
                <a href="/rules" className={NavBarItem}>Rules</a>
              </li>
              <li className={NavList}>
                <a href="/rules" className={NavBarItem}>Session</a>
              </li>
              <li className={NavList}>
                <a href="/rules" className={NavBarItem}>Contact</a>
              </li>
              <li className={NavList}>
                <a href="/profile" className={NavBarItem}>Profile</a>
              </li>          
            </ul>
          </div>
        </div>
        <div className='basis 2/5 md:basis-1/5'>
          <div className='flex justify-end px-4 w-150'>
            <SignedIn>
            {user && (
              <div onClick={toggleDropdown} className="cursor-pointer">
                <img src={user.imageUrl} alt="Profile" className="w-10 h-10 overflow-hidden rounded-full object-cover"/>
              </div>
            )}
            {dropdownOpen && (
              <div className="absolute right-8 md:right-16 mt-[3rem] py-2 w-48 border border-black-300 bg-white rounded-lg shadow-xl">
                <button>
                  <a href="/profile" className='rounded-md m-4 text-bold-500'>View Profile</a>
                </button>
                <div className='rounded-md mx-4 text-bold-500'>
                  <SignOutButton />
                </div>
              </div>
            )}
            </SignedIn>
            <SignedOut>
              <a href="/sign-in" className='p-2 px-4 bg-blue-600 rounded-md text-white font-semibold w-[157px]'>
                Sign in / Sign Up
              </a>
            </SignedOut >
          </div> 
        </div>
      </nav>
    </div>
  );
};

export default NavBar;