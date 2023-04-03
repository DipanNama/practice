import React from 'react'
import { Link } from 'react-router-dom'

export const HeroSection = () => {
    return (
        <section className="text-gray-400 bg-gray-800 body-font">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">Before they sold out
                        <br className="hidden lg:inline-block" />Shop the Latest Trends
                    </h1>
                    <p className="mb-8 leading-relaxed">Welcome to our online store! We offer a wide range of products to suit every taste and budget. From the latest fashion trends to must-have gadgets and accessories, we've got you covered. Browse our collection today and discover your new favorite item!</p>
                    <div className="flex justify-center">
                        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"><Link to="/products" >Buy Products</Link></button>
                        <button className="ml-4 inline-flex text-white bg-purple-600 border-0 py-2 px-6 focus:outline-none hover:bg-purple-700 hover:text-white rounded text-lg"><Link to="/premium" >Explore Plus!</Link></button>
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img className="object-cover object-center rounded" alt="hero" src="https://source.unsplash.com/random/720x600?shopping" />
                </div>
            </div>
        </section>
    )
}
