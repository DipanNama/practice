import React from 'react'
import Helmet  from '../Components/Helmet/Helmet'
import { Header } from '../Components/Header/Header'
import { HeroSection } from '../Components/HeroSection'
import { ProductsSection } from '../Components/Product/ProductsSection'
import {FeaturesSection} from '../Components/Product/FeaturesSection'
import { Footer } from '../Components/Footer/Footer'


export const  Home = (props) => {
    let loggedIn = false;
    if(props.name){
        loggedIn = true;
    }
    return (
        <div>
            <Helmet title="Home"/>
            <Header title="Developers Hub" SearchBar={true} name={props.name} loggedIn={loggedIn} />
            <HeroSection />
            <ProductsSection />
            <FeaturesSection />
            <Footer />
        </div>
    )
}
