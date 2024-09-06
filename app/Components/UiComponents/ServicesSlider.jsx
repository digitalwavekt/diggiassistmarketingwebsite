'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'
import { FaAnglesLeft, FaAnglesRight } from 'react-icons/fa6';
import Slider from "react-slick";

function PrevArrow(props) {
    const { className, onClick } = props;
    return (
        <button type='button' className="inline-flex justify-center items-center absolute top-2/4 -translate-y-2/4 z-10 w-10 md:w-[60px] h-10 md:h-[60px] border-0 text-lg md:text-2xl rounded-full bg-BGcolor2 text-Pcolor transition-all hover:text-white hover:bg-Pcolor left-0" onClick={onClick}> <FaAnglesLeft /> </button>
    );
}
function NextArrow(props) {
    const { className, onClick } = props;
    return (
        <button type='button' className="inline-flex justify-center items-center absolute top-2/4 -translate-y-2/4 z-10 w-10 md:w-[60px] h-10 md:h-[60px] border-0 text-lg md:text-2xl rounded-full bg-BGcolor2 text-Pcolor transition-all hover:text-white hover:bg-Pcolor right-0" onClick={onClick}> <FaAnglesRight /> </button>
    );
}
// max text lenght 
const maxTextLength = 22;

export default function ServicesSlider({ ServicesSliderData, CategoryName }) {
    const [servicesCategory, setServicesCategory] = useState(CategoryName);
    const filterServices = ServicesSliderData.filter(service => service.category === servicesCategory);
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: filterServices.length > 4,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            }
        ]
    };
    return (
        <div className='overflow-hidden'>
            <Slider {...settings} className='space-between-slider h-full'>
                {filterServices.map((curElem) => {
                    const { id, serviceName, serviceThumbnail } = curElem;
                    return (
                        <Link href={`/service/${id}`} key={id} className='px-1 sm:px-2 lg:px-3'>
                            <div className='rounded-lg border border-[#DDDDDD] py-5 px-2 lg:px-3 xl:px-5 text-center group'>
                                <div className="flex items-center justify-center border-2 border-Scolor rounded-full w-[110px] sm:w-[140px] lg:w-[180px] xl:w-[250px] h-[110px] sm:h-[140px] lg:h-[180px] xl:h-[250px] mx-auto mb-3 lg:mb-5">
                                    <Image className='w-[90px] sm:w-[120px] lg:w-[150px] xl:w-[200px] h-[90px] sm:h-[120px] lg:h-[150px] xl:h-[200px] rounded-full mx-auto object-cover transition-all group-hover:scale-110' src={serviceThumbnail} alt={serviceName} placeholder="blur" />
                                </div>
                                <h3 className='text-base lg:text-lg xl:text-xl font-semibold text-Tcolor transition-all group-hover:text-Pcolor'>{serviceName.length > maxTextLength ? serviceName.substring(0, maxTextLength) + '...' : serviceName}</h3>
                            </div>
                        </Link>
                    )
                })}
            </Slider>
        </div>
    )
}
