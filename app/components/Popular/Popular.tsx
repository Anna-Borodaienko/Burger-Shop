'use client';
import 'react-multi-carousel/lib/styles.css';

import Carousel from 'react-multi-carousel';

import BurgerCard from './BurgerCard';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1324 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1324, min: 764 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
  },
};

const Popular = () => {
  return (
    <div className='pt-[3rem] pb-[3rem]'>
      <h1 className='heading'>
        Our popular
        <span className='text-red-600'> burgers</span>
      </h1>
      <div className='w-[80%] mt-[4rem] mx-auto'>
        <Carousel
          additionalTransfrom={0}
          arrows={true}
          autoPlay={true}
          autoPlaySpeed={4000}
          centerMode={false}
          responsive={responsive}
          itemClass='item'
          showDots={false}
          infinite={true}>
          <BurgerCard
            title='Burger 1'
            image='/images/b1.png'
            reviews='6'
            price='10.66$'
          />
          <BurgerCard
            title='Burger 2'
            image='/images/b2.png'
            reviews='6'
            price='10.66$'
          />
          <BurgerCard
            title='Burger 3'
            image='/images/b3.png'
            reviews='6'
            price='10.66$'
          />
          <BurgerCard
            title='Burger 4'
            image='/images/b4.png'
            reviews='6'
            price='10.66$'
          />
          <BurgerCard
            title='Burger 5'
            image='/images/b5.png'
            reviews='6'
            price='10.66$'
          />
          <BurgerCard
            title='Burger 6'
            image='/images/b6.png'
            reviews='6'
            price='10.66$'
          />
          <BurgerCard
            title='Burger 7'
            image='/images/b7.png'
            reviews='6'
            price='10.66$'
          />
          <BurgerCard
            title='Burger 8'
            image='/images/b8.png'
            reviews='6'
            price='10.66$'
          />
          <BurgerCard
            title='Burger 9'
            image='/images/b9.png'
            reviews='6'
            price='10.66$'
          />
        </Carousel>
      </div>
    </div>
  );
};

export default Popular;
