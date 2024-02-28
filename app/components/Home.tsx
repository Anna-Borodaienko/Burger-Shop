'use client';
import 'aos/dist/aos.css';

import AOS from 'aos';
import { useEffect } from 'react';

import Delivery from './Delivery/Delivery';
import Feature from './Features/Feature';
import Hero from './Hero/Hero';
import Newsletter from './Newsletter/Newsletter';
import Popular from './Popular/Popular';
import Reservation from './Reservation/Reservation';
import Team from './Team/Team';

const Home = () => {
  useEffect(() => {
    const initAOS = async () => {
      await import('aos');
      AOS.init({
        duration: 1000,
        easing: 'ease',
        once: true,
        anchorPlacement: 'top-center',
      });
    };
    initAOS();
  }, []);

  return (
    <div className='overflow-hidden'>
      <Hero />
      <Feature />
      <Popular />
      <Delivery />
      <Team />
      <Reservation />
      <Newsletter />
    </div>
  );
};

export default Home;
