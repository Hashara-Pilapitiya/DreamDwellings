import React from 'react';
import './Residencies.css';
import 'swiper/css';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import data from '../../Utils/slider.json';
import { sliderSettings } from '../../Utils/Common';
import PropertyCard from '../PropertyCard/PropertyCard';

const Residencies = () => {
  return (
    <section className='r-wrapper' id='residencies'>

        <div className='paddings innerWidth r-container'>
            <div className='r-head flexColStart'>
                <span className='best'>Best Choices</span>
                <span className='primaryText'>Popular Residencies</span>
            </div>

           

            <Swiper {...sliderSettings}>

            <SliderButtons />

                {
                    data.map((card, i) => (
                        <SwiperSlide key={i}>
                          <PropertyCard card={card} />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    </section>
  )
}

export default Residencies;

const SliderButtons = () => {
    const swiper = useSwiper();
    return (
        <div className='flexCenter r-button'>
            <button onClick={() => swiper.slidePrev()}>&lt;</button>
            <button onClick={() => swiper.slideNext()}>&gt;</button>
        </div>
    );
};