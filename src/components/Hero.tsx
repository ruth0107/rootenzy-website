import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section id="home" className={styles.hero}>
      <div className={`container ${styles.heroContainer}`}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <h1 className={styles.headline}>Welcome to Rootenzy</h1>
          <p className={styles.subheadline}>
            Building systems for businesses that streamline, scale, and save.
          </p>
          <Link to="contact" smooth={true} duration={500} offset={-80}>
            <motion.button
              className={styles.ctaButton}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;