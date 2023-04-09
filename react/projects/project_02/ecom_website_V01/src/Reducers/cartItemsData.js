const initialState = []

const addCartItem = (state = initialState, action) => {
    switch (action.type){
        case "ITEM" : return 1+1;
        default : return state;
    }
}

export default changeCartValue;