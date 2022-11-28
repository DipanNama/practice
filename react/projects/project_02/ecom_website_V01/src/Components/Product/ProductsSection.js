import React from 'react'
import { BestSellingProducts } from './BestSellingProducts'
import { DealsOfTheDAy } from './DealsOfTheDay'
import { LatestLaunches } from './LatestLaunches'

export const ProductsSection = () => {
    return (
        <>
            <DealsOfTheDAy />
            <BestSellingProducts />
            <LatestLaunches />
        </>
    )
}
