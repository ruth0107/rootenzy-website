import { Toaster } from "react-hot-toast";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Contact from "./components/Contact"; // <-- Make sure this is imported

function App() {
  return (
    <>
      <Toaster position="top-right" /> {/* <-- Make sure this is here */}
      <Navbar />
      <main>
        <Hero />
        <About />
        <Contact /> {/* <-- Make sure this is here */}
      </main>
    </>
  );
}

export default App;
