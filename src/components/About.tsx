import { motion } from 'framer-motion';
import styles from './About.module.css';
import AboutIllustration from '../assets/about-illustration.png'; // 1. Import your image

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <div className={`container ${styles.aboutContainer}`}>
        <motion.div 
          className={styles.aboutContent}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {/* 2. Add a tagline for better hierarchy */}
          <h2 className={styles.heading}>About Rootenzy</h2>
          <p>
            At Rootenzy, we craft AI-powered automations and custom systems tailored to your business needs. Our solutions streamline workflows, reduce costs, and drive scalable growth. With intelligent integrations and elegant design, we help you operate at peak efficiency.
          </p>
        </motion.div>
        
        <motion.div 
          className={styles.imageWrapper} // 3. Use a new wrapper for the image
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {/* 4. Replace the placeholder with your actual image */}
          <img 
            src={AboutIllustration} 
            alt="Illustration of business systems and automation"
            className={styles.aboutImage}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default About;