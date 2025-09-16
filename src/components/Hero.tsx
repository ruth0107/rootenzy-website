// src/components/Hero.tsx
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import styles from './Hero.module.css';
import HeroBanner from '../assets/hero-banner.png'; // <-- 1. Import your banner image

const Hero = () => {
  return (
    <section id="home" className={styles.hero}>
      <div className={`container ${styles.heroContainer}`}>
        <motion.div
          className={styles.contentWrapper} // <-- Using a new wrapper class
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {/* 2. Remove the h1 and p tags, and add the img tag */}
          <img src={HeroBanner} alt="Rootenzy Banner" className={styles.heroImage} />

          {/* 3. The CTA button remains below the image */}
          <Link to="contact" smooth={true} duration={500} offset={-80}>
            <motion.button
              className={styles.ctaButton}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book a free call
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;