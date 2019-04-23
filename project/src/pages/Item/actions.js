export function loadItem(key) {
    
     return (dispatch, getState) => {
          const state = getState()
          const item = state.mainPage.products.find(i => i.key === key) || {}
          return dispatch({type: "LOAD_ITEM", item})
     }

}