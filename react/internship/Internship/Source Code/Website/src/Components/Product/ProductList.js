import React from 'react'
import { Link } from 'react-router-dom'
import { Footer } from '../Footer'
import { Header } from '../Header'
import { Card } from './Card'

export const ProductList = (props) => {
    return (
        <div>
            <Header title="Developers Hub" SearchBar={true} name={props.name} loggedIn={true} />
            <section className="bg-white dark:bg-gray-900">
                <div className="container px-6 py-8 mx-auto">
                    <div className="lg:flex lg:-mx-2">
                        <div className="space-y-3 lg:w-1/5 lg:px-2 lg:space-y-4">
                            <Link to="/" className="block font-medium text-gray-500 dark:text-gray-300 hover:underline">Jackets & Coats</Link>
                            <Link to="/" className="block font-medium text-gray-500 dark:text-gray-300 hover:underline">Hoodies</Link>
                            <Link to="/" className="block font-medium text-blue-600 dark:text-blue-500 hover:underline">T-shirts & Vests</Link>
                            <Link to="/" className="block font-medium text-gray-500 dark:text-gray-300 hover:underline">Shirts</Link>
                            <Link to="/" className="block font-medium text-gray-500 dark:text-gray-300 hover:underline">Blazers & Suits</Link>
                            <Link to="/" className="block font-medium text-gray-500 dark:text-gray-300 hover:underline">Jeans</Link>
                            <Link to="/" className="block font-medium text-gray-500 dark:text-gray-300 hover:underline">Trousers</Link>
                            <Link to="/" className="block font-medium text-gray-500 dark:text-gray-300 hover:underline">Shorts</Link>
                            <Link to="/" className="block font-medium text-gray-500 dark:text-gray-300 hover:underline">Underwear</Link>
                        </div>

                        <div className="mt-6 lg:mt-0 lg:px-2 lg:w-4/5 ">
                            <div className="flex items-center justify-between text-sm tracking-widest uppercase ">
                                <p className="text-gray-500 dark:text-gray-300">20 Items</p>
                                <div className="flex items-center">
                                    <p className="text-gray-500 dark:text-gray-300">Sort</p>
                                    <select className="font-medium text-gray-700 bg-transparent dark:text-gray-500 focus:outline-none">
                                        <option value="#">Recommended</option>
                                        <option value="#">Size</option>
                                        <option value="#">Price</option>
                                    </select>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                            <Card title="Denims Exclusive" price="$15" url="https://source.unsplash.com/random/?shirt"/>
                            <Card title="Denims Exclusive" price="$15" url="https://source.unsplash.com/random/?jeans"/>
                            <Card title="Denims Exclusive" price="$15" url="https://source.unsplash.com/random/?t-shirt"/>
                            <Card title="Denims Exclusive" price="$15" url="https://source.unsplash.com/random/?jacket"/>
                            <Card title="Denims Exclusive" price="$15" url="https://source.unsplash.com/random/?sweater"/>
                            <Card title="Denims Exclusive" price="$15" url="https://source.unsplash.com/random/?coat"/>
                            <Card title="Denims Exclusive" price="$15" url="https://source.unsplash.com/random/?muffler"/>
                            <Card title="Denims Exclusive" price="$15" url="https://source.unsplash.com/random/?hat"/>
                            <Card title="Denims Exclusive" price="$15" url="https://source.unsplash.com/random/?trousers"/>
                            <Card title="Denims Exclusive" price="$15" url="https://source.unsplash.com/random/?raincoat"/>
                            <Card title="Denims Exclusive" price="$15" url="https://source.unsplash.com/random/?sundress"/>
                            <Card title="Denims Exclusive" price="$15" url="https://source.unsplash.com/random/?maxidress"/>
                            <Card title="Denims Exclusive" price="$15" url="https://source.unsplash.com/random/?poloshirt"/>
                            <Card title="Denims Exclusive" price="$15" url="https://source.unsplash.com/random/?poncho"/>
                            <Card title="Denims Exclusive" price="$15" url="https://source.unsplash.com/random/?sweater"/>
                            <Card title="Denims Exclusive" price="$15" url="https://source.unsplash.com/random/?longskirt"/>
                            <Card title="Denims Exclusive" price="$15" url="https://source.unsplash.com/random/?tunic"/>
                            <Card title="Denims Exclusive" price="$15" url="https://source.unsplash.com/random/?blouse"/>
                            <Card title="Denims Exclusive" price="$15" url="https://source.unsplash.com/random/?skirt"/>
                            <Card title="Denims Exclusive" price="$15" url="https://source.unsplash.com/random/?overall"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}
