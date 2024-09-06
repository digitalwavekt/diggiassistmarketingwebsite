'use client'
import Image from 'next/image';
import React from 'react'
import Slider from "react-slick";
import HeroBanner1 from "@/public/hero-banner-image-1.jpg"
import HeroBanner2 from "@/public/hero-banner-image-2.jpg"
import HeroBanner3 from "@/public/hero-banner-image-3.jpg"
import HeroBanner4 from "@/public/hero-banner-image-4.jpg"
import { FaAnglesLeft, FaAnglesRight } from 'react-icons/fa6';
const sliderData = [
    { id: 1, thumbnailUrl: HeroBanner1, alt: "DiggiAssist Image" },
    { id: 2, thumbnailUrl: HeroBanner2, alt: "DiggiAssist Image" },
    { id: 3, thumbnailUrl: HeroBanner3, alt: "DiggiAssist Image" },
    { id: 4, thumbnailUrl: HeroBanner4, alt: "DiggiAssist Image" },
];


function PrevArrow(props) {
    const { className, onClick } = props;
    return (
        <button type='button' className="inline-flex justify-center items-center absolute top-2/4 -translate-y-2/4 z-10 w-10 md:w-20 h-10 md:h-20 border-0 text-lg md:text-2xl rounded-full bg-white text-Pcolor transition-all hover:text-white hover:bg-Pcolor left-5 md:left-10" onClick={onClick}> <FaAnglesLeft /> </button>
    );
}
function NextArrow(props) {
    const { className, onClick } = props;
    return (
        <button type='button' className="inline-flex justify-center items-center absolute top-2/4 -translate-y-2/4 z-10 w-10 md:w-20 h-10 md:h-20 border-0 text-lg md:text-2xl rounded-full bg-white text-Pcolor transition-all hover:text-white hover:bg-Pcolor right-5 md:right-10" onClick={onClick}> <FaAnglesRight /> </button>
    );
}
export default function HeroSlider() {
    var settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />
    };
    return (
        <div className='overflow-hidden'>
            <Slider {...settings}>
                {sliderData.map((curElem) => {
                    const { id, thumbnailUrl, alt } = curElem;
                    return (
                        <div key={id}>
                            <Image className='w-full h-full object-cover' src={thumbnailUrl} alt={alt} placeholder="blur" />
                        </div>
                    )
                })}
            </Slider>
        </div>
    )
}
