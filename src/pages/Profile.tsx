import React, { useState } from 'react';
import { UserProfile } from '@clerk/clerk-react';
import NavBar from '../components/NavigationBar';
import NavigationMenu from '../components/NavigationMenu';

const ProfilePage: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
    <NavBar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
    <NavigationMenu isOpen={isMenuOpen} />
        <div className="flex justify-center my-10 h-lvh">
      <UserProfile />
    </div>
    </>
    
  );
};

export default ProfilePage;