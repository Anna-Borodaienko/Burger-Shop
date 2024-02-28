import Image from 'next/image';

import imageBurger1 from '@/public/images/f1.jpg';
import imageBurger2 from '@/public/images/f2.jpg';
import imageBurger3 from '@/public/images/f3.jpg';

const Feature = () => {
  return (
    <div className='pt-[5rem] pb-[3rem]'>
      <h1 className='heading'>
        burgers made with <br /> love and
        <span className='text-red-600'> care</span>
      </h1>
      <div
        className='w-[90%] md:w-[80%] mt-[3rem] md:mt-[5rem] mx-auto 
        grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[3rem]'>
        <div
          data-aos='fade-left'
          data-aos-anchor-placement='top-center'>
          <div className='p-6 hover:bg-white rounded-lg transition-all duration-200'>
            <Image
              className='rounded-3xl'
              src={imageBurger1}
              alt='burger'
            />
            <h1 className='mt-[1.5rem] text-center text-[24px] text-black font-semibold'>
              First menu
            </h1>
            <p className='mt-[0.2rem] text-black text-opacity-60 text-center'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione
              nisi ab explicabo ipsam dolores qui assumenda obcaecati nobis
              doloribus ipsa.
            </p>
          </div>
        </div>
        <div
          data-aos='zoom-in'
          data-aos-delay='200'
          data-aos-anchor-placement='top-center'>
          <div className='p-6 hover:bg-white rounded-lg transition-all duration-200 lg:translate-y-[3rem]'>
            <Image
              className='rounded-3xl'
              src={imageBurger2}
              alt='burger'
            />
            <h1 className='mt-[1.5rem] text-center text-[24px] text-black font-semibold'>
              Second menu
            </h1>
            <p className='mt-[0.2rem] text-black text-opacity-60 text-center'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
              nesciunt voluptate blanditiis vitae vel neque voluptatum
              repellendus doloremque saepe recusandae?
            </p>
          </div>
        </div>
        <div
          data-aos='fade-right'
          data-aos-delay='400'
          data-aos-anchor-placement='top-center'>
          <div className='p-6 hover:bg-white rounded-lg transition-all duration-200'>
            <Image
              className='rounded-3xl'
              src={imageBurger3}
              alt='burger'
            />
            <h1 className='mt-[1.5rem] text-center text-[24px] text-black font-semibold'>
              Third menu
            </h1>
            <p className='mt-[0.2rem] text-black text-opacity-60 text-center'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
              nobis deserunt veniam sed odio nisi molestias nihil magnam.
              Magnam, hic!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
