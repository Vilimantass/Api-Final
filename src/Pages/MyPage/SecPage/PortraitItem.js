
import React from 'react'

import './PortraitItem.scss'


function PortraitItem({image}) {

    if (!image) {
        return;
      }


    return (


        
            <img className='photo' src={image} alt='image'/>
            
       
        
    )
    
}

export default PortraitItem

