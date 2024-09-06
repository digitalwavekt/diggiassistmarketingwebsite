import React from 'react'
import IconBox from '../UiComponents/IconBox'
import IconBoxData from '../Api/IconBoxAreaApi'

export default function IconBoxArea() {
    return (
        <section className='py-10 lg:py-20 xl:py-28 bg-BGcolor'>
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-6">
                    {
                        IconBoxData.slice(0, 3).map((curElem) => {
                            return(
                                <IconBox key={curElem.id} boxData={curElem} />
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}
