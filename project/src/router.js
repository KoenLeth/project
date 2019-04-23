import {BrowserRouter, Switch, Route} from 'react-router-dom';
import React from 'react';
import MainPage from './pages/Main'
import ItemPage from './pages/Item';
import CartPage from './pages/cart';

export default () => (
    <BrowserRouter>
    <Switch>
    <Route exact path='/' component={MainPage}/>
    <Route exact path='/item/:itemKey' component={ItemPage}/>
    <Route exact path='/cart' component={CartPage}/>
    </Switch>
    </BrowserRouter>
)