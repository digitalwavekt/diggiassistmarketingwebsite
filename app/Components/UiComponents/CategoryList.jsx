import React from 'react'
import CategoryCard from './CategoryCard'
import CategoryListData from '@/app/Components/Api/CategoryApi'
import ServicesData from '../Api/ServicesApi';

function updateCategoryCounts() {
    const categoryCounts = {};
    ServicesData.forEach(service => {
        if (!categoryCounts[service.category]) {
            categoryCounts[service.category] = 0;
        }
        categoryCounts[service.category]++;
    });
    function formatCount(count) {
        if (count === 0) return "0";
        return count < 10 ? `0${count}` : `${count}`;
    }
    CategoryListData.forEach(category => {
        const count = categoryCounts[category.title] || 0;
        category.productsCount = formatCount(count);
    });
}
updateCategoryCounts();

export default function CategoryList() {
    return (
        <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 md:gap-6'>
            {
                CategoryListData.map((curElem) => {
                    return (
                        <CategoryCard key={curElem.id} CategoryCardData={curElem} />
                    )
                })
            }

        </div>
    )
}
