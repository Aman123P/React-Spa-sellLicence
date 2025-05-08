import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks'; 
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import ChatWidget from './components/ChatWidget';
import { useState } from 'react';
function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? 'dark' : 'light'}>
      <button onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? '☀️ Light' : '🌙 Dark'}
      </button>
      <Hero />
      <HowItWorks />
      <Testimonials />
      <ContactForm />
      <ChatWidget />
    </div>
  );
}

export default App;


