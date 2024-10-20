import React from 'react'
import SectionTitle from '../UiComponents/SectionTitle'
import PostData from '../Api/BlogApi'
import CardBlogItem from '../UiComponents/CardBlogItem'

export default function BlogArea() {
  return (
    <section className='py-10 lg:py-20 xl:py-28 bg-white'>
      <div className="container mx-auto px-4">
        <SectionTitle title="Our Best Blogs" />
        <div className="grid grid-cols-2 sm:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-6">
          {
            PostData.map((curElem) => {
              return (
                <CardBlogItem key={curElem.id} postdData={curElem} />
              )
            })
          }
        </div>
      </div>
    </section>
  )
}
