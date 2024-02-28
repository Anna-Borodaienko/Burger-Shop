import Feature from './Features/Feature';
import Hero from './Hero/Hero';
import Popular from './Popular/Popular';

const Home = () => {
  return (
    <div className='overflow-hidden'>
      <Hero />
      <Feature />
      <Popular />
    </div>
  );
};

export default Home;
