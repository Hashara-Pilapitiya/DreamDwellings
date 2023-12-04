import React from 'react';
import HeroWeb from '../Components/HeroWeb/HeroWeb';
import Companies from '../Components/Companies/Companies';
import Residencies from '../Components/Residencies/Residencies';    
import Value from '../Components/Value/Value';
import Contact from '../Components/Contact/Contact';
import GetStarted from '../Components/GetStarted/GetStarted';

const Website = () => {
  return (
    <div>

        <HeroWeb />
        <Companies />
        <Residencies />
        <Value />
        <Contact />
        <GetStarted />  

    </div>
  )
}

export default Website;