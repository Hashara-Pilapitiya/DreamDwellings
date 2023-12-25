import React from 'react';
import SearchBar from '../../Components/SearchBar/SearchBar';
import './Properties.css';
import useProperties from '../../Hooks/useProperties';
import { PuffLoader} from 'react-spinners';
import PropertyCard from '../../Components/PropertyCard/PropertyCard';

const Properties = () => {

  const { data, isError, isLoading } = useProperties()
  

  if(isError){
   return(
       <div className='flexCenter'>
         <span>Error while fetching data</span>
       </div>
   )
  }

  if(isLoading){
   return(
     <div className='flexCenter' style={{height: '60vh'}}>
       <PuffLoader 
       color='#4169e1'
       />
     </div>
   )
  }



  return (
    <div>
      <div className='flexColCenter paddings innerWidth properties-container'>
        <SearchBar />

        <div className='paddings flexCenter properties'>
        {
          data.map((card, i)=> (<PropertyCard card={card} key={i}/>))
        }
       </div>  

      </div>
    </div>
  )
}

export default Properties;