import React from 'react';

interface NavigationMenuProps {
    isOpen: boolean;
}

const NavBarItem = "text-l font-semibold"
const NavList = 'mx-2 px-4 z-[21]'

const NavigationMenu: React.FC<NavigationMenuProps> = ({ isOpen }) => {
    return (
        <div className={`z-[20] mt-20 py-5 fixed inset-0 bg-white bg-opacity-90 transform ${isOpen ? 'translate-y-0' : '-translate-y-full'} transition-transform duration-500 ease-in-out ${isOpen ? 'backdrop-blur' : ''}`} >
            <nav>
            <ul className='flex flex-col gap-8 overflow-y-auto'>
              <li className={NavList}>
                <a href="/" className={NavBarItem}>Home</a>
              </li>
              <li className={NavList}>
                <a href="/profile" className={NavBarItem}>Profile</a>
              </li>          
            </ul>
            </nav>
        </div>
    );
};

export default NavigationMenu;