import React from 'react'
import SectionTitle from '../UiComponents/SectionTitle'
import ServicesSlider from '../UiComponents/ServicesSlider'
import ServicesData from '@/app/Components/Api/ServicesApi'
export default function GroomingService() {
    return (
        <section className='py-10 lg:py-20 xl:py-28 '>
            <div className="container mx-auto px-4">
                <SectionTitle title="India's Most Beauty & Grooming" />
                <ServicesSlider ServicesSliderData={ServicesData} CategoryName="Beauty & Grooming" />
            </div>
        </section>
    )
}
