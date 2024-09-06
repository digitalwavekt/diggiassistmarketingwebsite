import React from 'react'
import SectionTitle from '../UiComponents/SectionTitle'
import CardItem from '../UiComponents/CardItem'
import WhyChooseData from '../Api/WhyChooseApi'

export default function WhyChoose() {
    return (
        <section className='py-10 lg:py-20 xl:py-28 '>
            <div className="container mx-auto px-4">
                <SectionTitle title="Why Choose A Plan" />
                <div className="grid grid-cols-2 sm:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-6">
                    {
                        WhyChooseData.map((curElem) => {
                            return(
                                <CardItem key={curElem.id} cardData={curElem} />
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}
