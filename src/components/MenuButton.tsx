import React from 'react';

interface MenuButtonProps {
    isOpen: boolean;
    toggleMenu: () => void;
}

const MenuButton: React.FC<MenuButtonProps> = ({ isOpen, toggleMenu }) => {
    return (
        <button 
            aria-label={isOpen ? "Close menu" : "Open menu"} 
            className={`mr-2 md:hidden p-2 flex items-center justify-center w-10 h-10 rounded focus:outline-none bg-transparent ${isOpen ? 'open' : ''}`} 
            onClick={toggleMenu}
        >
            <div className="relative">
                <span className={`block w-8 h-0.5 bg-black transform transition duration-300 ease-in-out ${isOpen ? 'rotate-45 -translate-y-0.4' : ''}`}></span>
                <span className={`block w-8 h-0.5 bg-black transform transition duration-300 ease-in-out ${isOpen ? '-rotate-45 -translate-y-0.5' : 'mt-1.5'}`}></span>
            </div>
        </button>
    );
};

export default MenuButton;