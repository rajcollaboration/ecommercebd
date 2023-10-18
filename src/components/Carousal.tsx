import React, { useEffect,useState } from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import  Product  from './Product';
import axios from 'axios'
export const Carousal = () => {
  const [allProduct,setAllProduct] = useState([]);

  const getAllProducts = async (): Promise<void> => {
    try {
      const response = await axios.get('https://fakestoreapi.com/products');
      console.log(response);
      setAllProduct(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(()=>{
    getAllProducts()
  },[])

  return (
    <div>
        <Carousel
  additionalTransfrom={0}
  arrows
  autoPlaySpeed={3000}
  centerMode={false}
  className=""
  containerClass="container"
  dotListClass=""
  draggable
  focusOnSelect={false}
  infinite={false}
  itemClass=""
  keyBoardControl
  minimumTouchDrag={80}
  pauseOnHover
  renderArrowsWhenDisabled={false}
  renderButtonGroupOutside={false}
  renderDotsOutside={false}
  responsive={{
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024
      },
      items: 3,
      partialVisibilityGutter: 40
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 0
      },
      items: 1,
      partialVisibilityGutter: 30
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 464
      },
      items: 2,
      partialVisibilityGutter: 30
    }
  }}
  rewind={false}
  rewindWithAnimation={false}
  rtl={false}
  shouldResetAutoplay
  showDots={false}
  sliderClass=""
  slidesToSlide={1}
  swipeable
>

{
  allProduct.map((product)=>(
    <div><Product product={product}/></div>
  ))
}
</Carousel>
    </div>
  )
}
