import React from 'react'
import { Header } from '../Components/Header'
import { HeroSection } from '../Components/HeroSection'
import { ProductsSection } from '../Components/Product/ProductsSection'
import {FeaturesSection} from '../Components/Product/FeaturesSection'
import { Footer } from '../Components/Footer'


export const  Home = (props) => {
    let loggedIn = false;
    if(props.name){
        loggedIn = true;
    }
    return (
        <div>
            <Header title="Developers Hub" SearchBar={true} name={props.name} loggedIn={loggedIn} />
            <HeroSection />
            <ProductsSection />
            <FeaturesSection />
            <Footer />
        </div>
    )
}
