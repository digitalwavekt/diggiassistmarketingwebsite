import React from 'react'
import SectionTitle from '../UiComponents/SectionTitle';
import ServicesSlider from '../UiComponents/ServicesSlider';
import ServicesData from '../Api/ServicesApi';
import CategoryListData from '../Api/CategoryApi';

export default function ServiceArea() {
    return (
        <>
            {
                CategoryListData.map((curElem) => {
                    const { id, title } = curElem;
                    const filteredServices = ServicesData.filter(service => service.category === title);
                    return (
                        filteredServices.length > 0 && (
                            <section key={id} className='py-10 lg:py-20 xl:py-28 even:bg-BGcolor'>
                                <div className="container mx-auto px-4">
                                    <SectionTitle title={`India's Most ${title}`} />
                                    <ServicesSlider ServicesSliderData={ServicesData} CategoryName={title} />
                                </div>
                            </section>
                        )
                    )
                })
            }
        </>
    )
}
