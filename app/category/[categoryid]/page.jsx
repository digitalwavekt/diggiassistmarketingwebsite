import React from 'react';
import CategoryListData from '@/app/Components/Api/CategoryApi';
import ServicesData from '@/app/Components/Api/ServicesApi';
import SectionTitle from '@/app/Components/UiComponents/SectionTitle';
import ServiceCard from '@/app/Components/UiComponents/ServiceCard';
import BlogArea from '@/app/Components/PageComponents/BlogArea';

export default function CategorySingle({ params }) {
  const categoryName = params.categoryid.replace(/-/g, ' ').toLowerCase();
  const categoryItem = CategoryListData.find(cat => cat.title.toLowerCase() === categoryName);
  
  if (!categoryItem) {
    return <div className='flex items-center justify-center p-4 text-center bg-BGcolor py-20 md:h-[45vh] text-3xl sm:text-4xl md:text-5xl font-semibold text-Tcolor'>Category not found</div>;
  }

  const categoryTitle = categoryItem.title;
  const filteredServices = ServicesData.filter(service => service.category.toLowerCase() === categoryTitle.toLowerCase());

  return (
    <>
      <div>
        {filteredServices.length === 0 ? (
          <div className='flex items-center justify-center p-4 text-center bg-BGcolor py-20 md:h-[45vh] text-3xl sm:text-4xl md:text-5xl font-semibold text-Tcolor'>No services found for this category</div>
        ) : (

          <section className='py-10 lg:py-20 xl:py-28 bg-BGcolor'>
            <div className="container mx-auto px-4">
              <SectionTitle title={categoryTitle} />
              <div className='grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6'>
                {
                  filteredServices.map((curElem) => {
                    const { id } = curElem;
                    return (
                      <ServiceCard key={id} CatagroyServiceData={curElem} />
                    )
                  })
                }
              </div>
            </div>
          </section>
        )}
      </div>
      <BlogArea />
    </>
  );
}
