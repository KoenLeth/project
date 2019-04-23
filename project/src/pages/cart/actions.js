export function addItem(item) {
    
    return (dispatch, getState) => {
         
         return dispatch({type: "ADD_ITEM", item})
    }

}
export function removeItem(key) {
    
    return (dispatch, getState) => {
         
         return dispatch({type: "REMOVE_ITEM", key})
    }

}