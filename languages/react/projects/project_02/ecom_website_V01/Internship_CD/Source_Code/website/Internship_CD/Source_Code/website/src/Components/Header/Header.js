import React, { useState } from 'react'
import PropTypes from 'prop-types'
import '../App.css'
import { Link } from 'react-router-dom'
import "../App.css";
import { useSelector } from 'react-redux'

export const Header = (props) => {
    const [message, setMessage] = useState("");
    const handleChange = (event) => {
        let finalMessage = "" + event.target.value;
        setMessage(finalMessage);
        console.log(message)
    }
    const stateValue = useSelector((state) => state.changeCartValue);
    return (
        <div>
            <header className="text-gray-400 bg-gray-900 body-font">
                <div className="container mx-auto flex flex-wrap p-5 justify-center flex-col md:flex-row items-center">
                    <Link to="/" className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                        </svg>
                        <span className="ml-3 text-xl">{props.title}</span>
                    </Link>
                    {
                        props.SearchBar ? <div className="md:ml-auto md:mr-12 flex flex-wrap items-center text-base justify-center">
                            <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2 ml-10">
                                <input type="text" id="hero-field" name="hero-field" className="w-full bg-gray-800 rounded border bg-opacity-40 border-gray-700 focus:ring-2 focus:ring-indigo-900 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-12 search leading-8 transition-colors duration-200 ease-in-out" value={message} placeholder="Search here..." autoComplete='off' onChange={handleChange} />
                            </div>
                            <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"><Link to="/search">Search</Link></button>
                        </div> : <div className="md:ml-auto md:mr-12 flex flex-wrap items-center text-base justify-center"></div>
                    }
                    <nav className="md:ml-12 flex flex-wrap items-center text-base justify-center">
                        <Link to='/home' className="mr-5 hover:text-white">Home</Link>
                        <Link to='/about' className="mr-5 hover:text-white">About Us</Link>
                        <Link to='/contact' className="mr-5 hover:text-white">Contact Us</Link>
                    </nav>
                    {!props.loggedIn ?
                        <div>
                            <button className="inline-flex items-center font-medium text-black bg-indigo-500 border-0 py-1 px-3 focus:outline-none hover:bg-blue-500 rounded text-base mt-4 md:mt-0"><Link to="/signup" >Register</Link>
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </button>
                            <button className="inline-flex items-center font-medium text-black bg-green-500 border-0 ml-5 py-1 px-3 focus:outline-none hover:bg-green-400 rounded text-base mt-4 md:mt-0"><Link to="/login" >Login</Link>
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </button>
                        </div>
                        : <div>
                            <Link to='/cart' className="mr-5 hover:text-white"><i className="fa-solid fa-cart-shopping"></i><span class='badge badge-warning' id='lblCartCount'>{stateValue}</span></Link>
                            <button className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0"><Link to="/account" >Account</Link>
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </button>
                        </div>
                    }
                </div>
            </header>
        </div>
    )
}

Header.defaultProps = {
    title: "Developers Hub",
    loggedIn: false
}

Header.propTypes = {
    title: PropTypes.string,
    loggedIn: PropTypes.bool.isRequired
}