import Image from 'next/image';
import Link from 'next/link'
import React from 'react'

export default function CardItem({ cardData }) {
    const { thubmnail, title, desc } = cardData;
    return (
        <Link href="/">
            <div className='overflow-hidden rounded-lg'>
                <Image className='w-full h-auto object-cover rounded-lg transition-all hover:scale-110' src={thubmnail} alt={title} placeholder="blur" />
            </div>
            <div className="py-3 md:py-5 px-0 lg:px-5">
                <h2 className='text-lg sm:text-xl md:text-2xl xl:text-3xl font-semibold text-Tcolor mb-2 lg:mb-3 leading-tight'>{title}</h2>
                <p className='text-sm md:text-base'>{desc}</p>
            </div>
        </Link>
    )
}
