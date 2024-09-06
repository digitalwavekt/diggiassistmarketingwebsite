"use client";
import React from 'react'
import { Accordion } from "flowbite-react";

export default function PrimaryAccordion({ AccordionData }) {
    return (
        <Accordion collapseAll className='border-none'>
            {
                AccordionData.map((curElem) => {
                    const {id,title,desc} = curElem;
                    return (
                        <Accordion.Panel key={id}>
                            <Accordion.Title className='bg-BGcolor border-none rounded-lg  focus:right-0 focus:ring-transparent focus:shadow-none focus:border-none text-lg sm:text-xl font-semibold text-Tcolor mt-4 lg:mt-5 first:mt-0 focus:rounded-b-none'>{title}</Accordion.Title>
                            <Accordion.Content className='text-sm sm:text-base text-Bcolor bg-BGcolor rounded-lg rounded-t-none'>
                                <p>{desc}</p>
                            </Accordion.Content>
                        </Accordion.Panel>
                    )
                })
            }
        </Accordion>
    )
}
