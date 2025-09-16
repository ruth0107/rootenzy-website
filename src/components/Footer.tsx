// src/components/Footer.tsx
import { Link } from 'react-scroll';
import styles from './Footer.module.css';
import SecondaryLogo from '../assets/logo_favicon.png'; // <-- 1. You import the logo here

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        <div className={styles.footerLinks}>
          <Link to="home" smooth={true} duration={500}>Home</Link>
          <Link to="about" smooth={true} duration={500} offset={-80}>About</Link>
          <Link to="services" smooth={true} duration={500} offset={-80}>Services</Link>
          <Link to="contact" smooth={true} duration={500} offset={-80}>Contact</Link>
        </div>
        <div className={styles.footerLogo}>
          {/* 2. And you USE it here in the img tag */}
          <img src={SecondaryLogo} alt="Rootenzy Symbol" />
        </div>
        <div className={styles.footerSocials}>
          <a href="https://www.linkedin.com/company/rootenzy/" aria-label="LinkedIn">LI</a>
          <a href="https://www.instagram.com/rootenzy/" aria-label="Instagram">IN</a>
        </div>
      </div>
      <div className={styles.copyright}>
        &copy; {new Date().getFullYear()} Rootenzy. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;