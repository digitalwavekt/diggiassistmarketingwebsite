import React from 'react'
import SectionTitle from '../UiComponents/SectionTitle'
import AppImage from '@/public/app-image.png'
import Image from 'next/image'
import { FaAppStoreIos, FaGooglePlay } from 'react-icons/fa6'
export default function DownloadApp() {
    return (
        <section className='py-10 lg:py-20 xl:py-28 bg-BGcolor'>
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 items-center">
                    <div>
                        <SectionTitle title="Download Via SMS" />
                        <h4 className='mb-2 text-sm sm:text-base font-normal text-Bcolor'>Get a link via SMS to install the app. Fill your number down here.</h4>
                        <form action="#">
                            <div className="flex rounded-[40px] bg-white overflow-hidden h-[60px] relative">
                                <div className='flex items-center justify-center min-w-12 lg:min-w-20 h-full border-r border-BGcolor text-base font-semibold text-Tcolor'>+91</div>
                                <input className='flex-1 h-[60px] rounded-r-[40px] border-0 ring-0 outline-none shadow-none pl-4 pr-28 focus:ring-0 focus:shadow-none focus:border-none' type="text" required />
                                <button type="submit" className='inline-flex items-center justify-center text-white absolute right-2 top-2/4 -translate-y-2/4 h-12 rounded-[40px] px-5 bg-Pcolor'>SEND</button>
                            </div>
                        </form>
                        <div className='flex flex-wrap gap-y-2 gap-x-4 lg:gap-x-6 mt-5 lg:mt-10'>
                            <a href="#" target='_blank' className='inline-flex items-center gap-x-3 bg-Pcolor rounded-lg px-4 py-2 text-white'>
                                <FaGooglePlay className='text-3xl sm:text-5xl' />
                                <div className="flex-1">
                                    <span className='text-sm capitalize'>get it on</span>
                                    <h4 className='textxl sm:text-2xl capitalize font-medium'>google play</h4>
                                </div>
                            </a>
                            <a href="#" target='_blank' className='inline-flex items-center gap-x-3 bg-Pcolor rounded-lg px-4 py-2 text-white'>
                                <FaAppStoreIos className='text-3xl sm:text-5xl' />
                                <div className="flex-1">
                                    <span className='text-sm capitalize'>download on the</span>
                                    <h4 className='textxl sm:text-2xl capitalize font-medium'>app store</h4>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className='text-center'>
                        <Image className='mx-auto' src={AppImage} alt='app downlode' placeholder="blur" />
                    </div>
                </div>
            </div>
        </section>
    )
}
