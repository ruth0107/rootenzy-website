// src/App.tsx
import { useState, useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Systems from './components/Systems';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Loader from './components/Loader';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate page load
    setTimeout(() => setLoading(false), 2000); // Hide loader after 2 seconds
  }, []);

  if (loading) {
    return <Loader />; // <-- Show loader if loading is true
  }

  return (
    <>
      <Toaster position="top-right" />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Systems />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
