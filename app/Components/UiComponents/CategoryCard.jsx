import React from 'react'

import Image from 'next/image'
import Link from 'next/link';
export default function CategoryCard({ CategoryCardData }) {
    const {title,thumbnail, productsCount } = CategoryCardData;
    const formattedTitle = title.toLowerCase().replace(/\s+/g, '-');
    return (
        <Link href={`/category/${formattedTitle}`} className='text-center hover:text-Pcolor group'>
            <Image className='w-[130px] sm:w-[150px] lg:w-[200px] h-[130px] sm:h-[150px] lg:h-[200px] rounded-full object-cover mx-auto' src={thumbnail} alt={title} />
            <h3 className='text-base sm:text-lg font-semibold text-Tcolor leading-tight mt-2 sm:mt-4 mb-2 group-hover:text-Pcolor'>{title}</h3>
            <h4 className='text-xs text-Color1 font-normal group-hover:text-Pcolor'>{productsCount} Products</h4>
        </Link>
    )
}
