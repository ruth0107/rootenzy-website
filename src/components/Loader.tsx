import { motion } from 'framer-motion';
import styles from './Loader.module.css';
import LoaderLogo from '../assets/logo_favicon.png';

const Loader = () => {
  return (
    <div className={styles.loaderOverlay}>
      <motion.img
        src={LoaderLogo}
        alt="Loading..."
        className={styles.loaderLogo}
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  );
};

export default Loader;