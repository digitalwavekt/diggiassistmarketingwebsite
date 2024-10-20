import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaCalendarDays, FaRegCircleUser } from "react-icons/fa6";
const maxTextLength = 100;
export default function CardBlogItem({ postdData }) {
  const { thubmnail, title, desc, category, date, author } = postdData;
  return (
    <Link href="/">
      <div className='overflow-hidden rounded-lg relative'>
        <Image className='w-full h-auto object-cover rounded-lg transition-all hover:scale-110' src={thubmnail} alt={title} placeholder="blur" />
        <span className='absolute left-2 top-2 bg-Pcolor rounded-lg px-2 py-1 text-white text-sm font-medium capitalize lg:text-base'>{category}</span>
      </div>
      <div className="py-3 md:py-5 px-0 lg:px-5">
        <ul className='flex flex-wrap gap-x-3 lg:gap-x-5 gap-y-1 mb-3'>
          <li className='flex items-center gap-x-2 capitalize text-base'><FaRegCircleUser className='text-Pcolor' /> {author}</li>
          <li className='flex items-center gap-x-2 capitalize text-base'><FaCalendarDays className='text-Pcolor' /> {date}</li>
        </ul>
        <h2 className='text-lg sm:text-xl md:text-2xl xl:text-3xl font-semibold text-Tcolor mb-2 lg:mb-3 leading-tight'>{title}</h2>
        <p className='text-sm md:text-base md:leading-normal'>{desc.length > maxTextLength ? desc.substring(0, maxTextLength) + '...' : desc}</p>
      </div>
    </Link>
  )
}
