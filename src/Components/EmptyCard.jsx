import React from 'react'
import "./Style.css";

const EmptyCard = () => {
  return (
  <>
    <div className='Container_nodata' maxW='sm' m="auto">
    <div className='smallContaine_nodata'  m="auto">
      <div className='smallContaine_nodata_img'>
      <img
        src='https://media.tenor.com/ySU7TUgwfZoAAAAM/tolkie-sad.gif'
        alt='Green double couch with wooden legs'
        // borderRadius='lg'
      />
      </div>
      <div className='heading_nodata' >
        <h1>NO DATA AVAILABLE</h1>
        
      </div>
    </div>
   
   
  </div>
  
  </>

  )
}

export default EmptyCard