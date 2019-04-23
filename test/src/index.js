import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import allReducers from './reducers/index';
import { Provider } from 'react-redux';
import WebPage from './components/WebPage';


const store = createStore(allReducers);


ReactDOM.render(<Provider store={store}>
    <WebPage />
</Provider>,
    document.getElementById('root'));


serviceWorker.unregister();
