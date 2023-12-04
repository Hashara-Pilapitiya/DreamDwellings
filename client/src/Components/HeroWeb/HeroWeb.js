import React from 'react';
import './Hero.css';
import House from '../../Assets/House/house.avif';
import CountUp from 'react-countup';
import { motion } from 'framer-motion';
import SearchBar from '../SearchBar/SearchBar';

const HeroWeb = () => {
  return (
    <section className='hero-wrapper'>
      <div className='flexCenter paddings innerWidth hero-container'>

        <div className='flexColStart hero-left'>
          
            <div className='hero-title'>
              <div className='yellow-circle' />

              <motion.h1
                initial={{y: '2rem', opacity: 0}}
                animate={{y: 0, opacity: 1}}
                transition={{
                  duration: 2,
                  type: 'spring'
                }}
              >
                Welcome to Your <br /> Dream Home.
              </motion.h1>

            </div>

            <div className='flexColStart hero-description'>

              <span className='secondoryText pha'>Find the perfect property with the guidance of our seasoned professionals.</span>
              <span className='secondoryText pha'>Unlock exclusive listings that redefine luxury living. Discover a personalized <br /> real estate experience.</span>

            </div>

            <SearchBar />

            <div className='flexCenter stats'>
              <div className='flexColStart'>

                <span className='count'>
                  <CountUp start={6700} end={7000} duration={5} />
                  <span className='pluse'>+</span>
                </span>

                <span className='des'>Premium Products</span>

              </div>

              <div className='flexColStart'>

                <span className='count'>
                  <CountUp start={1850} end={2000} duration={4} />
                  <span className='pluse'>+</span>
                </span>

                <span className='des'>Happy Customers</span>
                
              </div>

              <div className='flexColStart'>

                <span className='count'>
                  <CountUp end={24} />
                  <span className='pluse'>+</span>
                </span>

                <span className='des'>Award Wining</span>
                
              </div>
            </div>

        </div>

        <div className='flexCenter hero-right'>

            <motion.div
              initial={{x: '7rem', opacity: 0}}
              animate={{x: 0, opacity: 1}}
              transition={{
                duration: 2,
                type: 'spring'
              }}
            className='image-container'>

              <img src={House} alt='' />

            </motion.div>

        </div>

      </div>
    </section>
  )
}

export default HeroWeb;
