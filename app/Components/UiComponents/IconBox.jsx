import Image from 'next/image';
import React from 'react'

export default function IconBox({boxData}) {
    const {icon,title,dsc} = boxData;
  return (
    <div className='flex items-center gap-x-4 bg-white rounded-lg p-5'>
        <div className='w-20 h-20 rounded-lg flex items-center justify-center bg-BGcolor'>
            <Image className='max-w-[50px] object-cover' src={icon} alt={title}  />
        </div>
        <div className='flex-1'>
            <h2 className='text-lg sm:text-xl md:text-2xl xl:text-3xl font-semibold text-Tcolor mb-1 leading-tight'>{title}</h2>
            <h4 className='text-base font-normal text-Bcolor'>{dsc}</h4>
        </div>
    </div>
  )
}
