// src/App.tsx
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About'; // Import the About component

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About /> {/* Add the About component here */}
      </main>
    </>
  );
}

export default App;