import Delivery from './Delivery/Delivery';
import Feature from './Features/Feature';
import Hero from './Hero/Hero';
import Popular from './Popular/Popular';
import Team from './Team/Team';

const Home = () => {
  return (
    <div className='overflow-hidden'>
      <Hero />
      <Feature />
      <Popular />
      <Delivery />
      <Team />
    </div>
  );
};

export default Home;
