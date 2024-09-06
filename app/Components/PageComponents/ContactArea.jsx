import React from 'react'
import SectionTitle from '../UiComponents/SectionTitle'
import ContactImage from '@/public/contact-image.png'
import Image from 'next/image'
import PrimaryForm from '../UiComponents/PrimaryForm'
export default function ContactArea() {
    return (
        <section className='py-10 lg:py-20 xl:py-28 bg-BGcolor'>
            <div className="container mx-auto px-4">
                <SectionTitle title="Contact Us" />
                <div className="bg-white p-5 lg:p-8 shad rounded-lg grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 items-center">
                    <div>
                        <PrimaryForm />
                    </div>
                    <div>
                        <Image src={ContactImage} alt='contact image' placeholder='blur' />
                    </div>
                </div>
            </div>
        </section>
    )
}
