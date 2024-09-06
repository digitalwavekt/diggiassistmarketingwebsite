import React from 'react'

export default function SectionTitle({title}) {
  return (
    <div className='relative mb-6 md:mb-10 lg:mb-12'>
        <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold capitalize text-Tcolor -mb-2'>{title}</h2>
        <span className='inline-block w-16 h-1 bg-Pcolor'></span>
    </div>
  )
}
