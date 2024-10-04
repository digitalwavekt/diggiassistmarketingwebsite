import React from 'react'
import SectionTitle from '../UiComponents/SectionTitle'
import ServicesData from '@/app/Components/Api/ServicesApi'
import BestServicesSlider from '../UiComponents/BestServicesSlider';
export default function BestServices() {
    const bestRating = 4;
    const bestRatedServices = ServicesData.filter(service => service.rating >= bestRating && service.rating <= 5);
    return (
        <section className='py-10 lg:py-20 xl:py-28 '>
            <div className="container mx-auto px-4">
                <SectionTitle title="best services" />
                <BestServicesSlider ServicesSliderData={bestRatedServices} />
            </div>
        </section>
    )
}
