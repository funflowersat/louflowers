import React, { useEffect, useState } from 'react'

import Link from 'next/link';
import { urlFor } from '@/lib/client';
import { useStateContext } from '@/context/StateContext';

import { LinearProgress } from '@mui/material';
import { useRouter } from 'next/router';

function Product({product : {image, name, slug, price, category}}) {
    const { view } = useStateContext();
    const router = useRouter();

    const [hovered, setHovered] = useState(false);
    const [loader, setLoader] = useState(false);

    const handleLoader = () => {
      setLoader();
    };

    const handleHover = () => {
      setHovered(true);
    };
  
    const handleLeave = () => {
      setHovered(false);
    };

    useEffect(() => {
      setLoader(false);
    }, [router])
    


       

    let productCardStyle = "product-card";
    let productImageStyle = "product-image";

    if (view == "default"){
        productCardStyle = "product-card";
        productImageStyle = "product-image";
    } else if(view == "large"){
      productCardStyle = "product-card-large";
      productImageStyle = "product-image-large";
    }else if(view == "xl"){
      productCardStyle = "product-card-xl";
      productImageStyle = "product-image-xl";
    }
    

  return (
    <div key={slug._id}>
        <Link onClick={handleLoader} href={`/product/${slug.current}`}>
            <div className={productCardStyle}>
            <img 
                onMouseOver={handleHover}
                onMouseOut={handleLeave}
                src={hovered ? urlFor(image[1] || image[0]) : urlFor(image && image[0])} 
                className={productImageStyle}
            />
        
            { loader === slug._id && <LinearProgress color="secondary" className='product-progress' /> }
            <p className="product-name">
                {name}
            </p>
            <p className="product-price">
                {price}€
            </p>
            </div>
        </Link>
    </div>
  )
}

export default Product;