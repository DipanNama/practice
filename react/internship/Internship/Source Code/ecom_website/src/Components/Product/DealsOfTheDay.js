import React, { useEffect, useState } from 'react'
import { CTA } from '../CTA'
import { Card } from './Card'
import { collection, getDocs } from "firebase/firestore";
import { db } from '../../firebase';
export const DealsOfTheDAy = () => {
    const [data, setData ] = useState([]);
    useEffect(() => {
        const fatchData = async () => {
            let productData = []
            try {
                const querySnapshot = await getDocs(collection(db, "productInfo"));
                querySnapshot.forEach((doc) => {
                    productData.push({ id: doc.id, ...doc.data()})
                    setData(productData)
                });
            } catch (err) {
                console.log(err)
            }
        };
        fatchData()
    },[])
    return (
        <div>
            <CTA heading="Deals of the Day" btn="Show All" let properties="text-gray-400 bg-gray-900 py-12 body-font" />
            <section className="bg-white dark:bg-gray-900">
                <div className="container px-6 py-8 mx-auto">

                    <div className="mt-6 lg:mt-0 lg:px-2 ">

                        <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">

                            {data.map(data => (
                                <Card key={data.id} title={data.productName} price={data.price} url={data.image}/>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
