import React from 'react'
import SectionTitle from '../UiComponents/SectionTitle'
import FaqAccordion from '../UiComponents/FaqAccordion'

export default function FaqArea() {
    return (
        <section className='py-10 lg:py-20 xl:py-28 '>
            <div className="container mx-auto px-4">
                <SectionTitle title="frequently asked questions" />
                <FaqAccordion />
            </div>
        </section>
    )
}
