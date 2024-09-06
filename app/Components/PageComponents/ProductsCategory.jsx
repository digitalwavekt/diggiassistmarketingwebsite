import React from 'react'
import SectionTitle from '../UiComponents/SectionTitle'
import CategoryList from '../UiComponents/CategoryList'

export default function ProductsCategory() {
  return (
    <section className='py-10 lg:py-20 xl:py-28 bg-BGcolor'>
      <div className="container mx-auto px-4">
        <SectionTitle title="Products By Category" />
        <CategoryList />
      </div>
    </section>
  )
}
