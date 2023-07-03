import React, { useEffect, useState } from 'react'
import { getDoc, doc } from "firebase/firestore";
import { db } from '../firebase';
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { incNumber, decNumber } from "../Actions/index"

const CartItem = (props) => {
  // const stateValue = useSelector((state) => state.changeCartValue);
  // const dispatch = useDispatch();

  // const [price,setPrice] = useState();

  const id = props.id
  const [data, setData] = useState([]);
  useEffect(() => {
    const fatchData = async () => {
      let cartItems = []
      try {
        const docRef = doc(db, "productInfo", id)
        getDoc(docRef).then(doc => {
          cartItems.push({ id: doc.id, ...doc.data() })
          setData(cartItems)
        })
      } catch (err) {
        console.log(err)
      }
    };
    fatchData()
  }, [id])

  // console.log()

  function removeItemFromCart(id) {
    let tempId = `ItemCount${id}`
    return localStorage.removeItem(tempId)
  }



  function setTotalCartValue() {
    const keys = Object.keys(localStorage)
    const cartArray = []
    let totalCartvalue = 0;
    keys.forEach((item) => {
      if (item.slice(0, 9) === "ItemCount") {
        cartArray.push(localStorage.getItem(item))
        totalCartvalue = cartArray.reduce((partialSum, a) => partialSum + parseInt(a), 0)
        localStorage.setItem("totalItems", totalCartvalue)
      }
    })
  }


  const dispatch = useDispatch();

  let ItemCount = parseInt(localStorage.getItem(`ItemCount${id}`))
  if (!ItemCount) {
    ItemCount = 0
  }
  const [count, setCount] = useState(ItemCount);

  const addCount = () => {
    setCount((prev) => prev + 1);
    localStorage.setItem(`ItemCount${id}`, count + 1)
    setTotalCartValue()
    dispatch(incNumber(props.id))
  };

  const minusCount = () => {
    if (count > 0) {
      setCount((prev) => prev - 1);
      localStorage.setItem(`ItemCount${id}`, count - 1)
      setTotalCartValue()
      dispatch(decNumber(props.id))
    }
  };


  // console.log(data)
  // let totalPrice = [];

  // let totalPrice = [];


  // let price = data.map(data => parseInt(data.price) * parseInt(localStorage.getItem(`ItemCount${data.id}`)))
  // let price = data.map(data => )

  // console.log(price)


  // data.forEach((p) => {
  //   totalPrice.push(parseInt(p.price) * parseInt(localStorage.getItem(`ItemCount${p.id}`)))
  // })
  // console.log(totalPrice)

  // localStorage.setItem("totalPrice", totalPrice)

  return (
    <div>
      {data.map(data => (
        <>
          {/* {setPrice(parseInt(data.price) * parseInt(localStorage.getItem(`ItemCount${data.id}`)))} */}
          {/* {console.log(price)} */}
          <div class="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
            <div class="flex w-2/5">
              <div class="w-20">
                <img class="h-24" src={data.image} alt="" />
              </div>
              <div class="flex flex-col justify-between ml-4 flex-grow">
                <span class="font-bold text-sm">{data.productName}</span>
                <span class="text-red-500 text-xs">{data.brand}</span>
                <Link to="" onClick={() => { removeItemFromCart(data.id) }} class="font-semibold hover:text-red-500 text-gray-500 text-xs">Remove</Link>
              </div>
            </div>
            <div class="flex justify-center w-1/5">
              <button onClick={minusCount}>
                <svg class="fill-current text-gray-600 w-3" viewBox="0 0 448 512"><path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                </svg>
              </button>
              <input class="mx-2 border text-center w-8" type="text" value={localStorage.getItem(`ItemCount${data.id}`)} />
              <button onClick={addCount}>
                <svg class="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
                  <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                </svg>
              </button>
            </div>
            <span class="text-center w-1/5 font-semibold text-sm">${data.price}</span>
            <span class="text-center w-1/5 font-semibold text-sm">${parseInt(data.price) * parseInt(localStorage.getItem(`ItemCount${data.id}`))}</span>
          </div>
        </>
      ))}
    </div>
  )
}

export default CartItem