import React from 'react'
import { CTA } from '../CTA'
import { Card } from './Card'
export const BestSellingProducts = () => {
    return (
        <div>
            <CTA heading="Best selling Products" btn="Show All" properties="text-gray-400 bg-gray-800 py-12 body-font" />
            <section className="bg-white dark:bg-gray-800">
                <div className="container px-6 py-8 mx-auto">
                    <div className="mt-6 lg:mt-0 lg:px-2 ">
                        <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                            <Card title="Denims Exclusive" price="$15" url="https://source.unsplash.com/random/?sundress" />
                            <Card title="Denims Exclusive" price="$15" url="https://source.unsplash.com/random/?maxidress" />
                            <Card title="Denims Exclusive" price="$15" url="https://source.unsplash.com/random/?poloshirt" />
                            <Card title="Denims Exclusive" price="$15" url="https://source.unsplash.com/random/?poncho" />
                            <Card title="Denims Exclusive" price="$15" url="https://source.unsplash.com/random/?sweater" />
                            <Card title="Denims Exclusive" price="$15" url="https://source.unsplash.com/random/?longskirt" />
                            <Card title="Denims Exclusive" price="$15" url="https://source.unsplash.com/random/?tunic" />
                            <Card title="Denims Exclusive" price="$15" url="https://source.unsplash.com/random/?blouse" />
                            <Card title="Denims Exclusive" price="$15" url="https://source.unsplash.com/random/?skirt" />
                            <Card title="Denims Exclusive" price="$15" url="https://source.unsplash.com/random/?overall" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
