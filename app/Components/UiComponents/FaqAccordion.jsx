import React from 'react'
import PrimaryAccordion from './PrimaryAccordion'
import FaqData from '../Api/FaqApi'
const evenFaqData = FaqData.filter((item, index) => index % 2 === 0);
const oddFaqData = FaqData.filter((item, index) => index % 2 !== 0);
export default function FaqAccordion() {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 items-start'>
            <PrimaryAccordion AccordionData={evenFaqData} />
            <PrimaryAccordion AccordionData={oddFaqData} />
        </div>
    )
}
