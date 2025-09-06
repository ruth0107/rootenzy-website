import { Link } from 'react-scroll';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <header className={styles.navbar}>
      <div className={`container ${styles.navContainer}`}>
        <a href="/" className={styles.logo}>
          Rootenzy
        </a>
        <nav>
          <ul className={styles.navLinks}>
            <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
            <li><Link to="about" smooth={true} duration={500} offset={-80}>About</Link></li>
            <li><Link to="services" smooth={true} duration={500} offset={-80}>Services</Link></li>
            <li><Link to="contact" smooth={true} duration={500} offset={-80}>Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;