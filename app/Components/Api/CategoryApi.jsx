import CategoryThumbnail1 from '@/public/category-thumbnail-1.jpg'
import CategoryThumbnail2 from '@/public/category-thumbnail-2.jpg'
import CategoryThumbnail3 from '@/public/category-thumbnail-3.jpg'
import CategoryThumbnail4 from '@/public/category-thumbnail-4.jpg'
import CategoryThumbnail5 from '@/public/category-thumbnail-5.jpg'
import CategoryThumbnail6 from '@/public/category-thumbnail-6.jpg'
import CategoryThumbnail7 from '@/public/category-thumbnail-7.jpg'
import CategoryThumbnail8 from '@/public/category-thumbnail-8.jpg'
import CategoryThumbnail9 from '@/public/category-thumbnail-9.jpg'
import CategoryThumbnail10 from '@/public/category-thumbnail-10.jpg'
import CategoryThumbnail11 from '@/public/category-thumbnail-11.jpg'
import CategoryThumbnail12 from '@/public/category-thumbnail-12.jpg'
import CategoryThumbnail13 from '@/public/category-thumbnail-13.jpg'
import CategoryThumbnail14 from '@/public/category-thumbnail-14.jpg'


const CategoryListData = [
    {
        id:1,
        title: "Self care",
        thumbnail: CategoryThumbnail1,
    },
    {
        id:2,
        title: "Take care",
        thumbnail: CategoryThumbnail2,
    },
    {
        id:3,
        title: "Home services",
        thumbnail: CategoryThumbnail3,
    },
    {
        id:4,
        title: "House Decor",
        thumbnail: CategoryThumbnail4,
    },
    {
        id:5,
        title: "Electrical services",
        thumbnail: CategoryThumbnail5,
    },
    {
        id:6,
        title: "Machnical",
        thumbnail: CategoryThumbnail6,
    },
    {
        id:7,
        title: "Installation",
        thumbnail: CategoryThumbnail7,
        subCategory: [
            {
                id:1,
                title: "Big Machine",
                thumbnail: CategoryThumbnail7,
            },
            {
                id:2,
                title: "WIfi Installation",
                thumbnail: CategoryThumbnail7,
            },
            {
                id:3,
                title: "DishTv/ cable",
                thumbnail: CategoryThumbnail7,
            },
        ]
    },
    {
        id:8,
        title: "Event Oragniser",
        thumbnail: CategoryThumbnail8,
    },
    {
        id:9,
        title: "Pet related",
        thumbnail: CategoryThumbnail9,
    },
    {
        id:10,
        title: "Tech Supporter",
        thumbnail: CategoryThumbnail10,
    },
    {
        id:11,
        title: "Rental services",
        thumbnail: CategoryThumbnail11,
    },
    {
        id:12,
        title: "Direct Selling",
        thumbnail: CategoryThumbnail12,
    },
    {
        id:13,
        title: "Long Terms",
        thumbnail: CategoryThumbnail13,
    },
    {
        id:14,
        title: "Advertisment store",
        thumbnail: CategoryThumbnail14,
    }
]

export default CategoryListData