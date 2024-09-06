import React from 'react'
import ServicesData from '@/app/Components/Api/ServicesApi';
import Image from 'next/image';
import ContactArea from '@/app/Components/PageComponents/ContactArea';
export default function SingleService({ params }) {
  const serviceid = parseInt(params.serviceid);
  const services = ServicesData.find(item => item.id === serviceid);
  if (!services) {
    return <div className='flex items-center justify-center p-4 text-center bg-BGcolor py-20 md:h-[45vh] text-3xl sm:text-4xl md:text-5xl font-semibold text-Tcolor'>service not found</div>;
  }
  const { id, serviceName, category, serviceThumbnail, desc } = services;
  return (
    <>
      <section className='pt-10 lg:pt-20 xl:pt-28 bg-BGcolor'>
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg p-5 lg:p-10 grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
            <div>
              <div className='relative mb-5'>
                <Image className='w-full object-cover rounded-md  object-top aspect-[16/9]' src={serviceThumbnail} alt={serviceName} placeholder='blur' />
                <span className='absolute left-4 top-4 bg-Pcolor text-white rounded-md px-3 py-2'>{category}</span>
              </div>
              <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold capitalize text-Tcolor mb-3 lg:mb-5'>{serviceName}</h2>
              <p>{desc}</p>
            </div>
            <div className='space-y-5 lg:space-y-7'>
              <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold capitalize text-Tcolor mb-3 lg:mb-5'>₹ 1594 - ₹ 2600</h2>
              <div>
                <h3 className='text-xl sm:text-2xl font-semibold capitalize text-Tcolor mb-2 lg:mb-3'>Things To Know</h3>
                <ul className='text-base text-Bcolor space-y-1 list-[square] list-inside'>
                  <li>Bring medical records</li>
                  <li>Wear comfortable clothes</li>
                  <li>Expect a physical assessment</li>
                  <li>Commit to home exercises </li>
                  <li>Check insurance</li>
                </ul>
              </div>
              <div>
                <h3 className='text-xl sm:text-2xl font-semibold capitalize text-Tcolor mb-2 lg:mb-3'>Diggiassist Suggestions</h3>
                <ul className='text-base text-Bcolor space-y-1 list-[square] list-inside'>
                  <li>Be Consistent</li>
                  <li>Follow Home Exercises</li>
                  <li>Set Clear Goals</li>
                  <li>Track Your Progress</li>
                  <li>Communicate Openly</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ContactArea />
    </>
  )
}