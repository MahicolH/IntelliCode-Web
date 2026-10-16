import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import IntelliClass from './components/IntelliClass';
import Projects from './components/Projects';
import About from './components/About';
import Faq from './components/Faq';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <Services />
        <IntelliClass />
        <Projects />
        <About />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
