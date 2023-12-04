import React from 'react';
import './Companies.css';
import Logo02 from '../../Assets/Logos/logo02.avif';
import Logo03 from '../../Assets/Logos/logo03.png';
import Logo04 from '../../Assets/Logos/logo04.png';
import Logo05 from '../../Assets/Logos/logo05.png';
import Logo06 from '../../Assets/Logos/logo06.png';
import Logo07 from '../../Assets/Logos/logo07.png';
import Logo08 from '../../Assets/Logos/logo08.png';
import Logo09 from '../../Assets/Logos/logo09.png';

const Companies = () => {
  return (
    <section className='c-wrapper'>
        <div className='paddings innerWidth flexCenter c-container'>

          <div  className='des'>
            <div>
              <img src={Logo02} alt='' />
            </div>

            <div>
              <span>Golden Luxury</span>
            </div>
          </div>

          <div  className='des'>
            <div>
              <img src={Logo03} alt='' />
            </div>

            <div>
              <span>Dreamscape Estates</span>
            </div>
          </div>

          <div className='des'>
            <div>
              <img src={Logo04} alt='' />
            </div>

            <div>
              <span>Urban Horizon Realty</span>
            </div>
          </div>

          <div className='des'>
            <div>
              <img src={Logo05} alt='' />
            </div>

            <div>
              <span>MetroPulse Properties</span>
            </div>
          </div>

          <div  className='des'>
            <div>
              <img src={Logo06} alt='' />
            </div>

            <div>
              <span>CityScape Homes</span>
            </div>
          </div>

          <div className='des'>
            <div>
              <img src={Logo07} alt='' />
            </div>

            <div>
              <span>Golden Gate Properties</span>
            </div>
          </div>

          <div  className='des'>
            <div>
              <img src={Logo08} alt='' />
            </div>

            <div>
              <span>Evergreen Estates</span>
            </div>
          </div>

          <div  className='des'>
            <div>
              <img src={Logo09} alt='' />
            </div>

            <div>
              <span>Quantum Homes</span>
            </div>
          </div>

          
          
         

        </div>
    </section>
  )
}

export default Companies;