export const incNumber = () => {
    return {
        type : "INCREMENT",
    }
}

export const decNumber = () => {
    return {
        type : "DECREMENT",
    }
}

export const cartItems = () => {
    return {
        type : "ITEM"
    }
}

export const removeCart = () => {
    return {
        type : "REMOVE_CART"
    }
}