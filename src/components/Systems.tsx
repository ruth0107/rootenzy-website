import { motion } from 'framer-motion';
import styles from './Systems.module.css';

// We'll create two columns of systems
const column1 = [
  { icon: '💬', title: 'Conversational Systems' },
  { icon: '✍️', title: 'Content Systems' },
  { icon: '💰', title: 'Sales Administration' },
  { icon: '📄', title: 'Hiring Systems' },
];

const column2 = [
  { icon: '🎯', title: 'Leadgen Systems' },
  { icon: '🛠️', title: 'Project Management' },
  { icon: '👥', title: 'Client Management' },
  { icon: '✨', title: 'Custom Workflows' },
];

const rowVariant = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

const Systems = () => {
  return (
    <section className={styles.systems}>
      <div className="container">
        <h2 className={styles.heading}>Systems We Build</h2>
        <p className={styles.subheading}>
          We create custom solutions to streamline every part of your business.
        </p>
        <div className={styles.table}>
          <div className={styles.column}>
            {column1.map((system, index) => (
              <motion.div
                key={index}
                className={styles.row}
                variants={rowVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <span className={styles.icon}>{system.icon}</span>
                <span className={styles.title}>{system.title}</span>
              </motion.div>
            ))}
          </div>
          <div className={styles.column}>
            {column2.map((system, index) => (
              <motion.div
                key={index}
                className={styles.row}
                variants={rowVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: (index + 0.5) * 0.1 }}
              >
                <span className={styles.icon}>{system.icon}</span>
                <span className={styles.title}>{system.title}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Systems;