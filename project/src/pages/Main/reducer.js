const initialState = {
    products: [],
    isLoading: true
}

export default (state=initialState, action)=> {
    switch(action.type){
        case "LOAD_PRODUCTS":
        return {
            ...state,
            isLoading: action.data.isLoading,
            products: action.data.data
        }
        default: 
        return state
    }
    
}