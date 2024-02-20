import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#000037]">
        <nav className='mx-auto max-w-[1024px] overflow-hidden px-6 py-12 sm:py-16 lg:px-8 text-gray-300'>
            <div className='-mb-6 columns-2 md:columns-4 text-sm sm:flex sm:justify-center sm:space-x-12 text-gray-300'>
                <div className='pb-6'>
                    <a href="/about">About</a>
                </div>
                <div className='pb-6'>
                    <a className="hover:text-white" href="/contact-us">Contact Us</a>
                </div> 
                <div className='pb-6'>
                    <a className="hover:text-white" href="/privacy-policy">Privacy and Policy</a>
                </div> 
                <div className='pb-6'>
                    <a className="hover:text-white" href="/terms-and-conditions">Terms and Conditions</a>
                </div> 
            </div>
            <p className='mt-10 text-center text-xs'>&copy; 2024 TRMC. All rights reserved.</p>
        </nav >
       
    </footer>
  );
};

export default Footer;