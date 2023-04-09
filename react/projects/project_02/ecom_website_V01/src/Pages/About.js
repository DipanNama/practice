import React from 'react'
import { Link } from 'react-router-dom'
import { Header } from '../Components/Header/Header'
import { Footer } from '../Components/Footer/Footer'
import Helmet from '../Components/Helmet/Helmet'
export const About = () => {
    let bg = {
        backgroundImage: 'url("https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80")'
    }
    return (
        <div>
            <Helmet title="About"/>
            <Header title="Developers Hub" SearchBar={false} loggedIn={true} />
            <div className="w-full bg-center bg-cover h-[40rem]" style={bg}>
                <div className="flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50">
                    <div className="text-center">
                        <h1 className="text-2xl font-semibold text-white uppercase lg:text-3xl">About <span className="text-blue-400 underline">Us</span></h1>
                        <button className="w-full px-4 py-2 mt-4 text-sm font-medium text-white uppercase transition-colors duration-200 transform bg-blue-600 rounded-md lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500"><Link to="/">Back to Home</Link></button>
                    </div>
                </div>
            </div>
            <div className="text-white m-auto  bg-gray-900 body-font">
                <h1 className="text-2xl text-center py-12 font-semibold text-white uppercase lg:text-3xl">Who We Are and What We Do</h1>
                <div className="text-white m-auto flex container  bg-gray-900 body-font">
                    <div className="container">
                        <p className='bg-grey-900 container m-auto px-12 py-12'>Welcome to Developers Hub, your one-stop shop for all your fashion and lifestyle needs. Our company was founded with the mission of providing high-quality, stylish products at affordable prices. We believe that everyone should have access to the latest fashion trends, cutting-edge technology, and must-have lifestyle products, regardless of their budget.

                            At Developers Hub, we're passionate about fashion, technology, and lifestyle products, and we're always on the lookout for the latest trends and innovations. We work hard to source the best products from around the world, and we're proud to offer a wide range of items to suit every taste and budget.

                            Our team of experts has a keen eye for quality, design, and value, and we're committed to providing exceptional customer service to ensure that our customers are always satisfied with their shopping experience. We believe in treating our customers with respect and honesty, and we go above and beyond to make sure that every purchase is a positive experience.

                            We understand that shopping online can be overwhelming, which is why we've designed our website to be user-friendly and easy to navigate. From the moment you enter our site, you'll be able to browse our collection of products with ease, add items to your cart, and proceed to checkout with confidence. We accept a wide range of payment methods, including credit cards, PayPal, and more, and we use the latest technology to ensure that your personal information is safe and secure.

                            Thank you for choosing Developers Hub for your fashion and lifestyle needs. We're committed to providing you with the best possible shopping experience, and we look forward to serving you for years to come.
                        </p>
                    </div>
                    <div className="image">
                        <div className='bg-grey-900 container px-12 py-12 m-auto'>
                            <img className="object-cover object-center rounded-full" alt="hero" src="https://source.unsplash.com/random/600x600?user" />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
