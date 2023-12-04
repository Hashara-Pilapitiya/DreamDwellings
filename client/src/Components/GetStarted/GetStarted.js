import React from 'react';
import './GetStarted.css';

const GetStarted = () => {
  return (
    <section className='g-wrapper'id='get-started'>
        <div className='paddings innerWidth g-container'>
            <div className='flexColCenter inner-container'>
                <span className='primaryText'>Get Started with DreamDwellings</span>
                <span className='secondoryText'>
                    Subscribe to our newsletter for exclusive property updates, market insights, and special offers.
                    <br />
                    Find Your Residence Soon.
                </span>

                <button className='button'>
                    <a href='hasharanethmi2020@gmail.com'>Get Started</a>
                </button>
            </div>
        </div>
    </section>
  )
}

export default GetStarted;