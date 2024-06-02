import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { img } from './images/data';
import classes from './MyCarousel.module.css';

const MyCarousel = () => {
  return (
    <div>
    <Carousel
   autoPlay={true}
   infiniteLoop={true}
   showIndicators={false}
   showThumbs={false}
>
  {
    img?.map((imageItemLink,i)=>{
        return <img key={i} src={imageItemLink}/>
    })
  }


</Carousel>
<div className={classes.hero_img}></div>
    </div>
  );
};

export default MyCarousel;