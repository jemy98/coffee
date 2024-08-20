import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Banner from './components/Banner';
import Testimonial from './components/Testimonial';
import Services from './components/Services';
import Footer from './components/Footer';
import AOS from 'aos';

const App = () => {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 700,
      easing: "ease-in",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-x-hidden">
      <Navbar />
      <Hero />
      <Banner />
      <Services />
      <Testimonial />
      <Footer />
    </div>
  )
}

export default App