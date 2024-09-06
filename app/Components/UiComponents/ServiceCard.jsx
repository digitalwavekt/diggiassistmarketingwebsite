import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
// max text lenght 
const maxTextLength = 22;
export default function ServiceCard({ CatagroyServiceData }) {
    const {id, serviceName, serviceThumbnail } = CatagroyServiceData;
    return (
        <Link href={`/service/${id}`}>
            <div className='rounded-lg border border-[#DDDDDD] py-5 px-2 lg:px-3 xl:px-5 text-center group'>
                <div className="flex items-center justify-center border-2 border-Scolor rounded-full w-[110px] sm:w-[140px] lg:w-[180px] xl:w-[250px] h-[110px] sm:h-[140px] lg:h-[180px] xl:h-[250px] mx-auto mb-3 lg:mb-5">
                    <Image className='w-[90px] sm:w-[120px] lg:w-[150px] xl:w-[200px] h-[90px] sm:h-[120px] lg:h-[150px] xl:h-[200px] rounded-full mx-auto object-cover transition-all group-hover:scale-110' src={serviceThumbnail} alt={serviceName} placeholder="blur" />
                </div>
                <h3 className='text-base lg:text-lg xl:text-xl font-semibold text-Tcolor transition-all group-hover:text-Pcolor'>{serviceName.length > maxTextLength ? serviceName.substring(0, maxTextLength) + '...' : serviceName}</h3>
            </div>
        </Link>
    )
}
