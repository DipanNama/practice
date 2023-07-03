const initialState = localStorage.getItem("totalItems");

const changeCartPrice = (state = initialState, action) => {
    switch (action.type) {
        case "INCREMENT_PRICE": return parseInt(localStorage.getItem("totalItems"));
        case "DECREMENT_PRICE": return parseInt(localStorage.getItem("totalItems"));
        default: return state;
    }
}

export default changeCartPrice;