import React from 'react'
import { Link } from 'react-router-dom'
import { Header } from '../Components/Header'
import { Footer } from '../Components/Footer'
export const About = () => {
    let bg = {
        backgroundImage: 'url("https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80")'
    }
    return (
        <div>
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
                        <p className='bg-grey-900 container m-auto px-12 py-12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium veniam consectetur, id porro sint accusamus! Vero rem nostrum, ratione harum, nobis molestiae explicabo aperiam possimus magni non voluptatibus ipsa. Ducimus autem quos architecto laboriosam mollitia debitis non ab. Suscipit aut quasi deserunt nemo nam unde aperiam mollitia inventore aspernatur perferendis?Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ducimus adipisci ut totam eum molestiae quaerat dolorum obcaecati voluptatem excepturi. Ullam veritatis ipsa enim magnam tempora quia veniam, fugiat reiciendis esse sapiente unde dignissimos labore beatae totam? Adipisci soluta quae repudiandae quod repellendus deleniti totam minus inventore quo, cum sed nesciunt ullam eveniet, modi quos accusantium odio excepturi voluptates iure deserunt nostrum, debitis expedita vel nulla. Quia odio distinctio minus eius qui voluptatum unde ducimus doloribus nemo accusamus porro quibusdam provident ex hic quae molestiae doloremque, dolores aut officiis adipisci temporibus? Odit itaque necessitatibus minima sunt natus, harum quibusdam. Consequuntur voluptas, veritatis est laborum debitis dolorem eligendi
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
