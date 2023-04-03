import React from 'react'

const CartItem = () => {
  return (
    <div>
      <div class="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
        <div class="flex w-2/5">
          <div class="w-20">
            <img class="h-24" src="https://drive.google.com/uc?id=18KkAVkGFvaGNqPy2DIvTqmUH_nk39o3z" alt="" />
          </div>
          <div class="flex flex-col justify-between ml-4 flex-grow">
            <span class="font-bold text-sm">Iphone 6S</span>
            <span class="text-red-500 text-xs">Apple</span>
            <a href="#" class="font-semibold hover:text-red-500 text-gray-500 text-xs">Remove</a>
          </div>
        </div>
        <div class="flex justify-center w-1/5">
          <svg class="fill-current text-gray-600 w-3" viewBox="0 0 448 512"><path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
          </svg>

          <input class="mx-2 border text-center w-8" type="text" value="1" />

          <svg class="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
            <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
          </svg>
        </div>
        <span class="text-center w-1/5 font-semibold text-sm">$400.00</span>
        <span class="text-center w-1/5 font-semibold text-sm">$400.00</span>
      </div>
    </div>
  )
}

export default CartItem