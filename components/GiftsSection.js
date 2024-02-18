import React from 'react';

import { Typography } from '@mui/material';
import Link from 'next/link';

function GiftsSection() {
    const arrowSVG = (
      <svg
        viewBox="0 0 49 20"
        height="10"
        width="30"
        xmlns="http://www.w3.org/2000/svg"
        id="arrow-horizontal"
      >
        <path
          transform="translate(30)"
          d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
          data-name="Path 10"
          id="Path_10"
        ></path>
      </svg>
    );

    const gift25 = '50';
    const href25 = '/store/all/filter?50';

  return (
    <div className='gifts'>
      <div className='gifts-container'>

          <div className='gifts-divs'>
              <Link href='/store/all?50'><img  src="https://funflowers.lv/image/cache/catalog/new_2022/photo_2022-03-03_17.09.37-270x350.webp" className='gifts-img'/></Link>
              <Link href='/store/all?50' className='gifts-img-text'><Typography variant='h6' > Bouqets under 50.00€ {arrowSVG}</Typography> </Link>
          </div>

          <div className='gifts-divs'>
              <Link href='/store/all?100'><img  src="https://funflowers.lv/image/cache/catalog/new_2023/img_9710t-900x1100.webp" className='gifts-img'/></Link>
              <Link href='/store/all?100' className='gifts-img-text'><Typography variant='h6' >Bouqets under 100€ {arrowSVG}</Typography> </Link>
          </div>

          <div className='gifts-divs'>
              <Link href='/store/all?150'><img  src="https://funflowers.lv/image/cache/catalog/new_2022/photo_2022-01-06_17.18.26-270x350.webp" className='gifts-img'/></Link>
              <Link href='/store/all?150' className='gifts-img-text'><Typography variant='h6' > Boquets under 150.00€ {arrowSVG}</Typography> </Link>
          </div>

          <div className='gifts-divs'>
              <Link href='/store/all'><img  src="https://funflowers.lv/image/cache/catalog/new_2023/img_4249_-900x1100.webp" className='gifts-img'/></Link>
              <Link href='/store/all' className='gifts-img-text'><Typography variant='h6' > All Flowers {arrowSVG}</Typography> </Link>
          </div>
          

      </div>
    </div>
  )
}

export default GiftsSection;