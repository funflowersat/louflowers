import React from 'react'
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';


function Banner() {

  
  return (
    <>
      <div className="b-container">
          <p  className='b-p1'> Free delivery on orders from 58.99€ </p> <LocalShippingOutlinedIcon className='b-icon'/>
      </div>
    </>
  )
}

export default Banner;