const initialState = localStorage.getItem("totalItems");

const changeCartValue = (state = initialState, action) => {
    switch (action.type) {
        case "INCREMENT": return parseInt(localStorage.getItem("totalItems"));
        case "DECREMENT": return parseInt(localStorage.getItem("totalItems"));
        default: return state;
    }
}

export default changeCartValue;