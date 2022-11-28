import React, { useEffect, useState } from 'react'
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { db, storage } from '../firebase';

export const AddProduct = () => {

    const [data, setData] = useState({
        productName: "",
        category: "",
        brand: "",
        price: "",
        type: "",
        colour: "",
        image: [],
        year: "",
        size: "",
        desc: ""
    });

    useEffect(() => {
        const uploadFile = () => {
            const imgName = "productImages/" + new Date().getTime() + data.image.name;
            console.log(imgName);
            const storageRef = ref(storage, imgName);
            const uploadTask = uploadBytesResumable(storageRef, data.image);
            uploadTask.on('state_changed',
                (snapshot) => {
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log('Upload is ' + progress + '% done');
                    switch (snapshot.state) {
                        case 'paused':
                            console.log('Upload is paused');
                            break;
                        case 'running':
                            console.log('Upload is running');
                            break;
                        default:
                            break;
                    }
                },
                (error) => {
                    console.log(error)
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                        // console.log('File available at', downloadURL);
                        setData((prev) => ({ ...prev, image: downloadURL }));
                    });
                }
            );
        };
        data.image.name && uploadFile();
    });

    console.log(data)


    const handleAdd = async (e) => {
        e.preventDefault(e);
        try {
            const res = await addDoc(collection(db, "productInfo"), {
                ...data,
                timestamp: serverTimestamp()
            });
            console.log("Document written with ID: ", res.id);
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div>
            <section className="max-w-4xl p-6 mt-5 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
                <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">Add New Product</h2>
                <hr className="my-6 border-gray-200 dark:border-gray-600" />
                <form onSubmit={handleAdd}>
                    <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                        <div>
                            <label className="text-gray-700 dark:text-gray-200" htmlFor="productName">Product Name</label>
                            <input id="productName" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600 focus:border-blue-600 focus:ring-blue-400 focus:border-2 focus:ring-opacity-100 dark:focus:border-blue-600 focus:outline-none" placeholder='Apple Imac 27"' autoComplete='none' onChange={(event) => setData((prev) => ({ ...prev, productName: event.target.value }))} />
                        </div>

                        <div>
                            <label className="text-gray-700 dark:text-gray-200" htmlFor="category">Category</label>
                            <input id="category" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600 focus:border-blue-600 focus:ring-blue-400 focus:border-2 focus:ring-opacity-100 dark:focus:border-blue-600 focus:outline-none" placeholder='Electronics' onChange={(event) => setData((prev) => ({ ...prev, category: event.target.value }))} />
                        </div>

                        <div>
                            <label className="text-gray-700 dark:text-gray-200" htmlFor="brand">Brand</label>
                            <input id="brand" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600 focus:border-blue-600 focus:ring-blue-400 focus:border-2 focus:ring-opacity-100 dark:focus:border-blue-600 focus:outline-none" placeholder='Apple' onChange={(event) => setData((prev) => ({ ...prev, brand: event.target.value }))} />
                        </div>

                        <div>
                            <label className="text-gray-700 dark:text-gray-200" htmlFor="price">Price</label>
                            <input id="price" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600 focus:border-blue-600 focus:ring-blue-400 focus:border-2 focus:ring-opacity-100 dark:focus:border-blue-600 focus:outline-none" placeholder='$2300' onChange={(event) => setData((prev) => ({ ...prev, price: event.target.value }))} />
                        </div>

                        <div>
                            <label className="text-gray-700 dark:text-gray-200" htmlFor="type">Type</label>
                            <input id="type" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600 focus:border-blue-600 focus:ring-blue-400 focus:border-2 focus:ring-opacity-100 dark:focus:border-blue-600 focus:outline-none" placeholder='Shoes' onChange={(event) => setData((prev) => ({ ...prev, type: event.target.value }))} />
                        </div>

                        <div>
                            <label className="text-gray-700 dark:text-gray-200" htmlFor="colour">Colour</label>
                            <input id="colour" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600 focus:border-blue-600 focus:ring-blue-400 focus:border-2 focus:ring-opacity-100 dark:focus:border-blue-600 focus:outline-none" placeholder='Red' onChange={(event) => setData((prev) => ({ ...prev, colour: event.target.value }))} />
                        </div>

                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" htmlFor="large_size">Large file input</label>
                            <input className="block w-full py-1.5 px-2 text-lg text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="large_size" type="file" onChange={(event) => setData((prev) => ({ ...prev, image: event.target.files[0] }))} />
                        </div>

                        <div className="grid grid-cols-0 gap-6 sm:grid-cols-2">
                            <div>
                                <label className="text-gray-700 dark:text-gray-200" htmlFor="year">Year</label>
                                <input id="year" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600 focus:border-blue-600 focus:ring-blue-400 focus:border-2 focus:ring-opacity-100 dark:focus:border-blue-600 focus:outline-none" placeholder='2022' onChange={(event) => setData((prev) => ({ ...prev, year: event.target.value }))} />
                            </div>

                            <div>
                                <label className="text-gray-700 dark:text-gray-200" htmlFor="size">Size</label>
                                <input id="size" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600 focus:border-blue-600 focus:ring-blue-400 focus:border-2 focus:ring-opacity-100 dark:focus:border-blue-600 focus:outline-none" placeholder='M' onChange={(event) => setData((prev) => ({ ...prev, size: event.target.value }))} />
                            </div>

                        </div>
                    </div>



                    <label htmlFor="desc" className="block mb-2 mt-5 text-sm font-medium text-gray-900 dark:text-gray-400">Product Description</label>
                    <textarea id="desc" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Add product description here..." onChange={(event) => setData((prev) => ({ ...prev, desc: event.target.value }))}></textarea>

                    <div className="flex justify-end mt-6">
                        <button type="submit" className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Save</button>
                    </div>
                </form>
            </section>
        </div>
    )
}
