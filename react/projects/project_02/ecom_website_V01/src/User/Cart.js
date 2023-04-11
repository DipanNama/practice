// import React, { useEffect, useState } from 'react'
import { DashbaordSidebar } from './Dashboard/DashboardSidebar'
import { DashboardFooter } from './Dashboard/DashboardFooter'
import CartItem from './CartItem'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Scrollbars } from 'react-custom-scrollbars-2'
// import { useEffect, useState } from 'react'


export const Cart = (props) => {
  const stateValue = useSelector((state) => state.changeCartValue);

  const keys = Object.keys(localStorage)
  const idList = []
  keys.forEach((item) => {
    if (item.slice(0, 9) === "ItemCount") {
      let itemId = item.slice(9)
      idList.push(itemId)
    }
  })


  // function allStorage() {

  //   var values = [],
  //     keys = Object.keys(localStorage),
  //     i = keys.length;

  //   while (i--) {
  //     values.push(localStorage.getItem(keys[i]));
  //   }

  //   return values;
  // }

  
  
  // const totalElements = allStorage()
  // const allNumbers = totalElements.filter(Number)
  // const totalCart = allNumbers.reduce((partialSum, a) => partialSum + parseInt(a), 0)

  



  return (
    <div>
      <div className='flex'>
        <DashbaordSidebar name={props.name} />
        <div className='w-5/6 bg-grey-900'>
          <h2 className="text-3xl font-semibold text-center text-gray-700 dark:text-white">Welcome to Dashboard</h2>
          <div className="px-4 py-8 h-full bg-white dark:border-gray-600">

            <div className="bg-gray-100">
              <div className="container mx-auto mt-10">
                <div className="flex shadow-md my-10">
                  <div className="w-3/4 bg-white px-10 py-10">
                    <div className="flex justify-between border-b pb-8">
                      <h1 className="font-semibold text-2xl">Shopping Cart</h1>
                      <h2 className="font-semibold text-2xl">{stateValue} Items</h2>
                    </div>
                    <div className="flex mt-10 mb-5">
                      <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">Product Details</h3>
                      <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Quantity</h3>
                      <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Price</h3>
                      <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Total</h3>
                    </div>

                    <Scrollbars style={{ width: 1060, height: 400 }}>
                      {idList.map(data => (
                        <CartItem id={data} />
                      ))}
                    </Scrollbars>

                    <Link to="/home" className="flex font-semibold text-indigo-600 text-sm mt-10">

                      <svg className="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512"><path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" /></svg>
                      Continue Shopping
                    </Link>
                  </div>

                  <div id="summary" className="w-1/4 px-8 py-10">
                    <h1 className="font-semibold text-2xl border-b pb-8">Order Summary</h1>
                    <div className="flex justify-between mt-10 mb-5">
                      <span className="font-semibold text-sm uppercase">Items {stateValue}</span>
                      <span className="font-semibold text-sm">590$</span>
                    </div>
                    <div>
                      <label className="font-medium inline-block mb-3 text-sm uppercase">Shipping</label>
                      <select className="block p-2 text-gray-600 w-full text-sm">
                        <option>Standard shipping - $10.00</option>
                      </select>
                    </div>
                    <div className="py-10">
                      <label htmlFor="promo" className="font-semibold inline-block mb-3 text-sm uppercase">Promo Code</label>
                      <input type="text" id="promo" placeholder="Enter your code" className="p-2 text-sm w-full" />
                    </div>
                    <button className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">Apply</button>
                    <div className="border-t mt-8">
                      <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                        <span>Total cost</span>
                        <span>$600</span>
                      </div>
                      <button className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full"><Link to="/checkout">Checkout</Link></button>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            <DashboardFooter />
          </div>
        </div>
      </div>
    </div>
  )
}
