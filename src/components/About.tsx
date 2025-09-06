import React from 'react';
import { motion } from 'framer-motion';
import styles from './About.module.css';

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <div className={`container ${styles.aboutContainer}`}>
        <motion.div 
          className={styles.aboutContent}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className={styles.heading}>About Rootenzy</h2>
          <p>
            At Rootenzy, we believe that powerful technology should be accessible and elegant. We specialize in creating bespoke systems and automations that empower businesses to operate at their peak efficiency.
          </p>
        </motion.div>
        <motion.div 
          className={styles.aboutImage}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className={styles.imagePlaceholder}>Illustration</div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;