import {combineReducers} from 'redux';
import CarsReducers from './car';
import ActiveCar from './car-active';


const allReducers = combineReducers({
    active: ActiveCar,
    cars: CarsReducers
});

export default allReducers