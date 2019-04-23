import {combineReducers} from 'redux';
import MainPageReducer from './pages/Main/reducer'
import ItemPageReducer from './pages/Item/reducer'
import CartPageReducer from './pages/cart/reducer'

export default combineReducers(
    {
        cartPage: CartPageReducer,
        itemPage: ItemPageReducer,
        mainPage: MainPageReducer,
    }
)