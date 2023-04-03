import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Footer } from '../Components/Footer';
import { Header } from '../Components/Header';
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from '../firebase';

export const ContactUs = (props) => {
    let style = {
        width: "100%",
        height: "100%",
        filter: "grayscale(1) contrast(1.2) opacity(0.16)"
    }
    let src = "https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed";

    const [userData, setUserData] = useState({
        name: "",
        email: "",
        message: ""
    });

    let name, value;
    const postUserData = (event) => {
        name = event.target.name;
        value = event.target.value;
        setUserData({ ...userData, [name]: value });
        console.log(userData)
    }

    const handleSubmit = async (e) => {
            e.preventDefault(e);
            try {
                const res = await addDoc(collection(db, "userQuery"), {
                    ...userData,
                    timestamp: serverTimestamp()
                });
                console.log("Document written with ID: ", res.id);
            } catch (err) {
                console.log(err)
            }
    
    }


    return (
        <div>
            <Header title="Developers Hub" SearchBar={true} name={props.name} loggedIn={true} />
            <section className="text-gray-400 bg-gray-900 body-font relative">
                <form onSubmit={handleSubmit} action="POST">
                    <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
                        <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                            <iframe style={style} title="map" className="absolute inset-0" frameborder="0" marginheight="0" marginwidth="0" scrolling="no" src={src}></iframe>
                            <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
                                <div className="lg:w-1/2 px-6">
                                    <h2 className="title-font font-semibold text-white tracking-widest text-xs">ADDRESS</h2>
                                    <p className="mt-1">Agartala, Tripura, India, 799001</p>
                                </div>
                                <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                                    <h2 className="title-font font-semibold text-white tracking-widest text-xs">EMAIL</h2>
                                    <Link to="/" className="text-indigo-400 leading-relaxed">dipannama91@gmail.com</Link>
                                    <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">PHONE</h2>
                                    <p className="leading-relaxed">+91-7005412904</p>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                            <h2 className="text-white text-lg mb-1 text-center font-medium title-font">Contace Us</h2>
                            <p className="leading-relaxed mb-5 text-center">We can't solve your problem if you don't tell us about it!</p>
                            <div className="relative mb-4">
                                <label htmlFor="name" className="leading-7 text-sm text-gray-400">Name</label>
                                <input type="text" id="name" name="name" value={userData.name} onChange={postUserData} placeholder="Enter your name" className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                            <div className="relative mb-4">
                                <label htmlFor="email" className="leading-7 text-sm text-gray-400">Email</label>
                                <input type="email" id="email" name="email" value={userData.email} onChange={postUserData} placeholder='Enter your email' className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                            <div className="relative mb-4">
                                <label htmlFor="message" className="leading-7 text-sm text-gray-400">Message</label>
                                <textarea id="message" name="message" value={userData.message} onChange={postUserData} placeholder='Please describe your problem...' className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                            </div>
                            <button type="submit" className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Send Message</button>
                            <p className="text-xs text-gray-400 text-opacity-90 mt-3">Thanks for joining with us we'll apriciate your bravery for letting us know about your problem.</p>
                        </div>
                    </div>
                </form>
            </section>
            <Footer />
        </div>
    )
}
