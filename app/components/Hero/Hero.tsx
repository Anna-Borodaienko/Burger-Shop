'use client';
import 'react-multi-carousel/lib/styles.css';

import Image from 'next/image';
import { BiCycling } from 'react-icons/bi';
import Carousel from 'react-multi-carousel';

import imgBurger1 from '@/public/images/b1.png';
import imgBurger2 from '@/public/images/b2.png';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Hero = () => {
  return (
    <Carousel
      additionalTransfrom={0}
      arrows={false}
      autoPlay={true}
      autoPlaySpeed={4000}
      centerMode={false}
      responsive={responsive}
      itemClass='item'
      showDots={true}
      infinite={true}>
      <div
        className='w-[100%] h-[88vh] flex items-center justify-center 
        flex-col  bg-blue-950 md:clip_path'>
        <div
          className='w-[80%] grid grid-cols-1 md:grid-cols-2
          justify-center items-center gap-[2rem] mx-auto'>
          <Image
            className='hidden md:block'
            src={imgBurger1}
            alt='burger1'
          />
          <div>
            <h1 className='text-[40px] font-semibold text-yellow-400'>
              Fast Food Burger
            </h1>
            <h1 className='text-[90px] leading-[5rem] uppercase text-white font-bold'>
              Best <br />
              Burgers
            </h1>
            <p className='mt-[1rem] text-white text-opacity-70 text-[18px]'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis
              qui fugiat voluptatem est vitae officia quaerat sint similique.
              Minus magnam deserunt vel odit at quis.
            </p>
            <button
              className='px-8 mt-[2rem] py-3 text-[16px]
              bg-green-500 transition-all duration-200 hover:bg-green-700 
              flex items-center rounded-md space-x-2 text-white'>
              <span>
                <BiCycling className='w-[1.7rem] h-[1.7rem]' />
              </span>
              <span className='font-bold'>Order Now</span>
            </button>
          </div>
        </div>
      </div>
      <div
        className='w-[100%] h-[88vh] flex items-center justify-center 
        flex-col  bg-red-950 md:clip_path'>
        <div
          className='w-[80%] grid grid-cols-1 md:grid-cols-2
          justify-center items-center gap-[2rem] mx-auto'>
          <Image
            className='hidden md:block'
            src={imgBurger2}
            alt='burger2'
          />
          <div>
            <h1 className='text-[40px] font-semibold text-yellow-400'>
              Tasty Burger
            </h1>
            <h1 className='text-[90px] leading-[5rem] uppercase text-white font-bold'>
              Top <br />
              Burgers
            </h1>
            <p className='mt-[1rem] text-white text-opacity-70 text-[18px]'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis
              qui fugiat voluptatem est vitae officia quaerat sint similique.
              Minus magnam deserunt vel odit at quis.
            </p>
            <button
              className='px-8 mt-[2rem] py-3 text-[16px]
              bg-blue-500 transition-all duration-200 hover:bg-green-700 
              flex items-center rounded-md space-x-2 text-white'>
              <span>
                <BiCycling className='w-[1.7rem] h-[1.7rem]' />
              </span>
              <span className='font-bold'>Order Now</span>
            </button>
          </div>
        </div>
      </div>
    </Carousel>
  );
};

export default Hero;
