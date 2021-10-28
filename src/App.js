import './App.css';
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Projects from "./components/projects/Projects";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import BackToTop from "./components/backToTop/BackToTop";
import { useState } from 'react';

function App() {
  const [theme, setTheme] = useState("light-mode");

  const themeToggle = () => {
    setTheme(
      theme === "dark-mode" ? "light-mode" : "dark-mode"
    )
  }
  return (
    <div className={`app ${theme}`}>
      <Navbar themeToggle={themeToggle} theme={theme} />

      <Home theme={theme} />
      <Projects />
      <About />
      <Contact />
      <Footer />

      <BackToTop theme={theme} />
    </div>
  );
}

export default App;
