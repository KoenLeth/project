const initialState = {
    items: []
}

export default (state=initialState, action)=> {
    switch(action.type){
        case "ADD_ITEM":
        return {
            ...state,
            items: [...state.items, action.item]
        }
        case "REMOVE_ITEM":
        return {
            ...state,
            items: state.items.remove(i => i.key === action.key)
        }
        default: 
        return state
    }
    
}