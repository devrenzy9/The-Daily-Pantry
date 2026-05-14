import React, { useState, useEffect } from 'react';
import NavbarMain from './NavbarMain';
import DesktopMenu from './DesktopMenu';
import MobileDrawer from './MobileDrawer';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`bg-[#FBF6F1] ${scrolled ? 'sticky top-0 z-50 shadow-sm' : ''}`}>
        <NavbarMain mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
        <DesktopMenu />
      </nav>
      <MobileDrawer open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
};

export default Navbar;
