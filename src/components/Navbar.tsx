import { useState } from 'react';
import { Link } from 'react-scroll';
import styles from './Navbar.module.css';
import MainLogo from '../assets/logo_favicon_nobg.png'; 

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className={styles.navbar}>
      <div className={`container ${styles.navContainer}`}>
        <a href="/" className={styles.logo}>
          {/* 2. Replace the "Rootenzy" text with an img tag */}
          <img src={MainLogo} alt="Rootenzy Logo" />
        </a>
        
        {/* --- Hamburger Menu Icon --- */}
        <div className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`} onClick={toggleMenu}>
          <span className={`${styles.bar} ${menuOpen ? styles.bar1 : ''}`}></span>
          <span className={`${styles.bar} ${menuOpen ? styles.bar2 : ''}`}></span>
          <span className={`${styles.bar} ${menuOpen ? styles.bar3 : ''}`}></span>
        </div>
        
        {/* --- Navigation Links --- */}
        <nav className={`${styles.navWrapper} ${menuOpen ? styles.open : ''}`}>
          <ul className={styles.navLinks}>
            <li><Link to="home" smooth={true} duration={500} onClick={closeMenu}>Home</Link></li>
            <li><Link to="about" smooth={true} duration={500} offset={-80} onClick={closeMenu}>About</Link></li>
            <li><Link to="services" smooth={true} duration={500} offset={-80} onClick={closeMenu}>Services</Link></li>
            <li><Link to="contact" smooth={true} duration={500} offset={-80} onClick={closeMenu}>Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;