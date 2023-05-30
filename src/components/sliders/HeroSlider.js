import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, A11y, Autoplay } from 'swiper';
// import { displayMoney } from '../../helpers/utils';
// import productsData from '../../data/productsData';
import { getAllProductEndpoint } from "../../utils/Endpoint";
import { Api } from "../../utils/Api";
import { useEffect,useState } from "react";

import 'swiper/scss';
import 'swiper/scss/autoplay';
import 'swiper/scss/pagination';


const HeroSlider = () => {
    const [carousel, setCarousel] = useState([]);
    const getImageCarousel = async () => {
      const { statusCode, data } = await Api.getAllProducts(
        getAllProductEndpoint,
        {}
      );
      console.log("carousel data", data);
      if(statusCode === true){
        setCarousel(data);
      }
    };
    useEffect(() => {
      getImageCarousel();
    }, []);

    // const heroProducts = productsData.filter(item => item.tag === 'hero-product');


    return (
        <Swiper
            modules={[Pagination, A11y, Autoplay]}
            loop={true}
            speed={400}
            spaceBetween={100}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{
                delay: 4000,
                disableOnInteraction: false,
            }}
        >
            {
               carousel && carousel.map((item, i) => {
                    console.log('item',item)
                    const {name} = item;
                    const { id, title, tagline, productImage, productPrice, originalPrice, path,productName } = item.products;
                    // const newPrice = displayMoney(finalPrice);
                    // const oldPrice = displayMoney(originalPrice);
                    return (
                        <SwiperSlide
                            key={id}
                            className={`wrapper hero_wrapper hero_slide-${i}`}
                        >
                            <div className="hero_item_txt">
                                <h3>{name}</h3>
                                <h1>{productName}</h1>
                                <h2 className="hero_price">
                                    {productPrice} &nbsp;
                                    <small><del>{Number(productPrice) +100}</del></small>
                                </h2>
                                <Link to={`${path}${id}`} className="btn">Shop Now</Link>
                            </div>
                            <figure className="hero_item_img">
                                {/* <img src={productImage[0]} alt="product-img" /> */}
                                <img src={`http://localhost:8083/images/${productImage[0]}`} alt='img' width={"100px"} height={"150px"}/>
                            </figure>
                        </SwiperSlide>
                    );
                })
            }
        </Swiper>
    );
};

export default HeroSlider;