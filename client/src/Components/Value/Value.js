import React from 'react';
import './Value.css';
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel } from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import Image from '../../Assets/House/house01.avif';
import data from '../../Utils/Accordion';
import { IoIosArrowDropdownCircle } from "react-icons/io";


const Value = () => {

  return (
    <section className='v-wrapper' id='value'>
        <div className='paddings innerWidth flexCenter v-container'>

            {/*left side*/}
            <div className='v-left'>

                <div className='image-container'>

                    <img src={Image} alt='' />

                </div>

            </div>

            {/* right side */}
            <div className='flexColStart v-right'>
                <span className='values'>Our Values</span>
                <span className='primaryText'>Value We Give to You</span>
                <span className='secondoryText'>
                    We always ready to help by providing the best services for you.
                    <br />
                    We beleive a good blace to live can make your life better.
                </span>

                <Accordion className='accordion' allowMultipleExpanded={false} preExpanded={[0]}>

                    {
                        data.map((item, i) => {

                            return (
                                <AccordionItem className='accordionItem' key={i} uuid={i}>

                                    <AccordionItemHeading>
                                        <AccordionItemButton className='flexCenter accordionButton'>


                                            <div className='flexCenter icon'>{item.icon}</div>
                                            <span className='primaryText'>
                                                {item.heading}
                                            </span>
                                            <div className='flexCenter icon'>
                                            <IoIosArrowDropdownCircle size={20} />
                                            </div>
                                        </AccordionItemButton>
                                    </AccordionItemHeading>

                                    <AccordionItemPanel className='accordionItemPanel'>
                                        <p className='secondoryText'>{item.detail}</p>
                                    </AccordionItemPanel>

                                </AccordionItem>
                            )
                        })
                    }
                </Accordion>

            </div>

        </div>
    </section>
  )
}

export default Value;