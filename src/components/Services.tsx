// src/components/Services.tsx
import { motion } from 'framer-motion';
import styles from './Services.module.css';

const servicesData = [
  {
    icon: '🤖',
    title: 'AI Automation',
    description: 'Leverage AI to automate repetitive tasks and drive efficiency.',
  },
  {
    icon: '⚙️',
    title: 'Business Systems',
    description: 'Custom-built systems to manage your operations seamlessly.',
  },
  {
    icon: '📈',
    title: 'Scaling Solutions',
    description: 'Infrastructure that grows with your business, not against it.',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const Services = () => {
  return (
    <section id="services" className={styles.services}>
      <div className="container">
        <h2 className={styles.heading}>What We Offer</h2>
        <div className={styles.servicesGrid}>
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              className={styles.serviceCard}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -10, boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)' }}
            >
              <div className={styles.icon}>{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;