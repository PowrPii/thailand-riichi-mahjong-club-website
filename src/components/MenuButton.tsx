import React from 'react';

interface MenuButtonProps {
    isOpen: boolean;
    toggleMenu: () => void;
}

const MenuButton: React.FC<MenuButtonProps> = ({ isOpen, toggleMenu }) => {
    return (
        <button 
            aria-label={isOpen ? "Close menu" : "Open menu"} 
            className={`mx-2 md:hidden p-2 flex items-center justify-center w-10 h-10 rounded focus:outline-none bg-transparent ${isOpen ? 'open' : ''}`} 
            onClick={toggleMenu}
        >
            <div className="relative">
                <span className={`block w-5 h-[0.06rem] bg-black transform transition duration-300 ease-in-out ${isOpen ? 'rotate-45 -translate-y-[-1px]' : ''}`}></span>
                <span className={`block w-5 h-[0.06rem] bg-black transform transition duration-300 ease-in-out ${isOpen ? '-rotate-45 -translate-y-0' : 'mt-1.5'}`}></span>
            </div>
        </button>
    );
};

export default MenuButton;