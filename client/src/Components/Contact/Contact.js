import React from 'react';
import './Contact.css';
import House from '../../Assets/House/house02.avif';
import { MdWifiCalling3 } from "react-icons/md";
import { IoChatbubbleEllipses } from "react-icons/io5";
import { FaVideo } from "react-icons/fa6";
import { FaMessage } from "react-icons/fa6";

const Contact = () => {
  return (
    <section className='c-wrapper' id='contact-us'>
        <div className='paddings innerWidth flexCenter c-container'>

            {/* left side */}
            <div className='flexColStart c-left'>
                <span className='contacts'>Our Contacts</span>
                <span className='primaryText'>Easy to Contact Us</span>
                <span className='secondoryText'>
                     Whether you have questions about a specific property, need guidance on the buying or selling process, or just want to say hello, our team is ready to connect with you
                </span>

                <div className='flexColStart contactMode'>

                    {/* first row */}
                    <div className='flexStart row'>
                        <div className='flexColCenter mode'>
                            <div className='flexStart'>

                                <div className='flexCenter icon1'>
                                    <MdWifiCalling3 size={25}/>
                                </div>

                                <div className='flexColStart detail'>
                                    <span className='call'>
                                       Call 
                                    </span>
                                    <span className='number'>
                                        011-2343456
                                    </span>
                                    
                                </div>

                            </div>

                            <div className='flexCenter button'>Call Now</div>

                        </div>

                        <div className='flexColCenter mode'>
                            <div className='flexStart'>

                                <div className='flexCenter icon1'>
                                    <IoChatbubbleEllipses size={25}/>
                                </div>

                                <div className='flexColStart detail'>
                                    <span className='call'>
                                       Chat 
                                    </span>
                                    <span className='number'>
                                        011-2343456
                                    </span>
                                    
                                </div>

                            </div>

                            <div className='flexCenter button'>Chat Now</div>

                        </div>

                    </div>

                    {/* second row */}
                    <div className='flexStart row'>
                        <div className='flexColCenter mode'>
                            <div className='flexStart'>

                                <div className='flexCenter icon1'>
                                    <FaVideo size={25}/>
                                </div>

                                <div className='flexColStart detail'>
                                    <span className='call'>
                                       Video Call 
                                    </span>
                                    <span className='number'>
                                        011-2343456
                                    </span>
                                    
                                </div>

                            </div>

                            <div className='flexCenter button'>Video Call Now</div>

                        </div>

                        <div className='flexColCenter mode'>
                            <div className='flexStart'>

                                <div className='flexCenter icon1'>
                                    <FaMessage size={25}/>
                                </div>

                                <div className='flexColStart detail'>
                                    <span className='call'>
                                       Message 
                                    </span>
                                    <span className='number'>
                                        011-2343456
                                    </span>
                                    
                                </div>

                            </div>

                            <div className='flexCenter button'>Message Now</div>

                        </div>

                    </div>

                </div>
            </div>

            {/* right side */}
            <div className='c-right'>
                <div className='image-container'>
                    <img src={House} alt='' />
                </div>
            </div>

        </div>
    </section>
  )
}

export default Contact;