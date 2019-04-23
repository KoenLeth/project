import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Router from './router';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import { createStore, applyMiddleware} from 'redux';
import reducers from './reducers';
import thunk from 'redux-thunk';
const store = createStore(
    reducers,
    applyMiddleware(thunk)
    );

ReactDOM.render(
    <Provider store={store}>
        <Router/>
    </Provider>, 
    document.getElementById('root'));

serviceWorker.unregister();
