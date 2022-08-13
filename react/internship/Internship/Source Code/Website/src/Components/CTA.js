import React from 'react'
import { Link } from 'react-router-dom'

export const CTA = (props) => {
    return (
        <div>
            <section className={props.properties}>
                <div className="">
                    <div className="container px-5 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
                        <h1 className="flex-grow sm:pr-16 text-2xl font-medium title-font text-white">{props.heading}</h1>
                        <button className="flex-shrink-0 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-10 sm:mt-0"><Link to="/products">{props.btn}</Link></button>
                    </div>
                </div>
            </section>
        </div>
    )
}
