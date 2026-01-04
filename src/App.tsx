import { HelmetProvider } from 'react-helmet-async';
import Hero from './components/Hero';
import TechStack from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import SEO from './components/SEO';
import Experience from './components/Experience';
import ResumeDownload from './components/ResumeDownload';


const App = () => {
  return (
    <HelmetProvider>
      <SEO />
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-900 bg-opacity-80 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <span className="text-xl font-bold text-green">Ayush Singh</span>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition">About</a>
              <a href="#tech" className="text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition">Skills</a>
              <a href="#projects" className="text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition">Projects</a>
              <a href="#contact" className="text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-16">
        <Hero />
        <TechStack />
        <Experience />
        <Projects />
        <ResumeDownload />
        <Contact />
      </main>
    </div>
    </HelmetProvider>
  );
};

export default App;