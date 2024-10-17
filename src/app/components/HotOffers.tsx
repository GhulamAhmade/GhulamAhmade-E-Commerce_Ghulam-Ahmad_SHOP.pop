import React from 'react';
import { ProductCard } from './ProductCard';

// Sample product data for display
const productsData = [
    {
        img: "/image1.png",
        title: "Pant",
        desc: "Men's White Pant",
        rating: 4,
        price: 890.00
    },
    {
        img: "/image2.png",
        title: "T-Shirt",
        desc: "Men's T-Shirt",
        rating: 5,
        price: 850.00
    },
    {
        img: "/image3.png",
        title: "T-shirt",
        desc: "Mens' White T-Shirt",
        rating: 3,
        price: 790.00
    },
    {
        img: "/image5.png",
        title: "T-shirt",
        desc: "Mens' Printed T-Shirt",
        rating: 5,
        price: 800.00
    },
    {
        img: "/iamge7.jpg",
        title: "ZARA",
        desc: "Beautiful lawn suit",
        rating: 4,
        price: 890.00
    },
    {
        img: "/image5.jpg",
        title: "Polo",
        desc: "Men's Polo Shirt",
        rating: 4,
        price: 890.00
    },
];

export const WomensSection = () => {
    return (
        <div className='container pt-16'>
            {/* Section Title for Men's Products */}
            <h2 className='flex justify-center font-serif text-4xl pb-6 text-gray-800'>
                <span className='text-2xl text-red-700 font-serif'>HOT</span>OFFER'S
            </h2>

            {/* Grid Layout for Product Cards */}
            <div className='grid grid-cols-2 place-items-center sm:place-items-start sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10'>
                {/* Mapping through productsData to render ProductCard for each product */}
                {productsData.map((item, index) => (
                    <ProductCard
                        key={index} // Unique key for each item
                        img={item.img}
                        title={item.title}
                        desc={item.desc}
                        rating={item.rating}
                        price={item.price}
                    />
                ))}
            </div>
        </div>
    );
};

