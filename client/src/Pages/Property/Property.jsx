import React from 'react';
import './Property.css';
import { useQuery } from 'react-query';
import { useLocation } from 'react-router-dom'; 
import { getProperty } from '../../Utils/api';
import { PuffLoader } from 'react-spinners';
import { IoHeartSharp } from "react-icons/io5";
import { FaShower } from "react-icons/fa6";
import { FaParking } from "react-icons/fa";
import { FaBed } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import Map from '../../Components/Map/Map';

const Property = () => {

    const {pathname} = useLocation();
    const id = pathname.split('/').slice(-1)[0];

    const { data, isLoading, isError } = useQuery(['resd', id], () => getProperty(id));

    console.log(data);

    
    if(isLoading) {
        return <div className='wrapper'>
                    <div className='flexCenter paddings'>
                        <PuffLoader color={'#000080'} loading={isLoading} size={50} />
                    </div>
                </div>
    }

    if(isError) {
        return <div className='wrapper'>
                    <div className='flexCenter paddings'>
                        <span>Something went wrong.</span>
                    </div>
                </div>
    }

  return (

    <div className='wrapper'>
        <div className='flexColStart paddings innerWidth property-container'>

            <div className='like'>
             <IoHeartSharp size={24} color='blue' />
            </div>

            <img src={data?.image} alt='home' />

            <div className='flexCenter property-details'>

                <div className='flexColStart left'>
                    <div className='flexStart head'>
                        <span className='primaryText'>{data?.title}</span>
                        <span style={{color: "orange", fontSize: '1.5rem'}}>$ {data?.price}</span>
                    </div>

                    <div className="flexStart facilities">

                        <div className="flexStart facility">
                            <FaShower size={20} color='blue' />
                            <span>{data?.facilities?.bathrooms}
                                 Bathrooms</span>
                        </div>

                        <div className="flexStart facility">
                            <FaBed  size={20} color='blue'/>
                            <span>{data?.facilities?.bedrooms} Bedrooms</span>
                        </div>

                        <div className="flexStart facility">
                            <FaParking size={20} color='blue' />
                            <span>{data?.facilities?.parkings} Parking</span>
                        </div>

                    </div>

                    <span className='secondaryText ' style={{textAlign: "justify"}}>{data?.description}</span>

                    <div className="flexStart" style={{gap: '1rem'}}>
                        <FaLocationDot size={25} />
                        <span className='secondaryText'>
                            {
                             data?.address
                            }
                             {
                             data?.city
                            }
                             {
                             data?.country
                            }
                        </span>
                    </div>

                    <button className='button'>Book Your Visit</button>

                </div>

                <div className="map">
                    <Map address={data?.address} city={data?.city} country={data?.country} />
                </div>

            </div>

        </div>
    </div>


  )
}

export default Property;