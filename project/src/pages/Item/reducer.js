const initialState = {
    item: {}
}

export default (state=initialState, action)=> {
    switch(action.type){
        case "LOAD_ITEM":
        return {
            ...state,
            item: action.item
        }
        default: 
        return state
    }
    
}