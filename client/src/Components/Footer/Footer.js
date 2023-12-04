import React from 'react';
import './Footer.css';
import Logo from '../../Assets/Logos/logo01.png';

const Footer = () => {
  return (
    <section className='f-wrapper'>
        <div className='paddings innerWidth flexCenter f-container'>

            {/* left side */}
            <div className='flexColCenter f-left'>

                <div className='logo'>
                    <div className='logoImg'>
                        <img src={Logo} alt='' width={120} />
                    </div>

                    <div className='logoText'>
                        <h3><span>D</span>ream<span>D</span>wellings</h3>
                    </div>
                </div>
                

                <span className='secondoryText'>
                    Our vision is to redefine the way individuals experience <br /> real estate.
                </span>
            </div>

            {/* right side */}
            <div className='flexColStart f-right'>
                <span className='primaryText'>Information</span>
                <span className='secondoryText'>No 123/4, Bloom Road, USA.</span>

                <div className='flexCenter f-menu'>
                    <span>Property</span>
                    <span>Services</span>
                    <span>Product</span>
                    <span>About Us</span>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer;