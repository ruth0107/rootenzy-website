import React, { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import styles from './Contact.module.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const toastId = toast.loading('Sending message...');

    try {
      // Use the relative path for the deployed site
      const API_URL = '/api/contact';
      const response = await axios.post(API_URL, formData);
      
      toast.success(response.data.success || 'Message sent successfully!', { id: toastId });
      setFormData({ name: '', email: '', message: '' }); // Clear form
    } catch (error) {
      toast.error('Failed to send message. Please try again.', { id: toastId });
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className="container">
        <h2 className={styles.heading}>Contact Us</h2>
        <form onSubmit={handleSubmit} className={styles.contactForm}>
          <input
            type="text" name="name" placeholder="Your Name"
            value={formData.name} onChange={handleChange} required
          />
          <input
            type="email" name="email" placeholder="Your Email"
            value={formData.email} onChange={handleChange} required
          />
          <textarea
            name="message" placeholder="Your Message" rows={6}
            value={formData.message} onChange={handleChange} required
          ></textarea>
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;