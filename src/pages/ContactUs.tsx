import React, { useState, useEffect } from 'react';
import NavBar from '../components/NavigationBar';
import NavigationMenu from '../components/NavigationMenu';
import Footer from '../components/Footer';

const ContactUsPage: React.FC = () => {
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
            <div className='flex flex-col md:flex-row p-4' >
                <div className="flex flex-col justify-center h-[70vh] md:w-[60%]">
                    <h1 className="text-4xl md:text-4xl p-5 font-bold md:mx-32">Get in touch</h1>
                    <p className='p-5 text-medium text-justify text-gray-700 md:mx-32'>
                        Contact us through this email : <br className='md:hidden'/> <br className='md:hidden'/><a className="underline" href="&#109;&#097;&#105;&#108;&#116;&#111;&#058;&#97;d&#109;&#105;n&#64;t&#104;a&#105;&#108;&#97;nd-rii&#99;h&#105;&#45;mah&#106;&#111;ng-c&#108;&#117;b&#46;&#99;&#111;&#109;">a&#100;&#109;i&#110;&#64;&#116;&#104;&#97;iland-&#114;&#105;i&#99;hi&#45;m&#97;&#104;jo&#110;&#103;&#45;&#99;&#108;ub.&#99;&#111;m</a>
                    </p>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ContactUsPage;