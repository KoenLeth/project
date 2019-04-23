import React, { Component } from 'react';
import memo from 'memoize-one';
import '../../styles/App.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import ListItem from '../../components/Main/LisItem';


import { loadProducts } from './actions'
import { addItem } from '../cart/actions'

class App extends Component {
    componentDidMount() {
        this.props.actions.loadProducts()
    }
    state = {
        query: '',
        item: null,
    };
    addToCart = (id)=>{
        this.props.actions.addItem(id); 
}
    goToCart = () => {
        this.props.history.push(`/cart`)
    }
    onInput = (e) => {
        this.setState({
            qeury: e.target.value
        });
    }

    onRef = (ref) => {
        console.log(ref);
        this.input = ref;
    }

    filterItems = memo((qeury, arr) => {
        return qeury ? arr.filter(e => e.title && e.title.includes(qeury)) : arr;
    });

    setCurrentItem = (item) => {
        console.log(item);

        this.setState({
            item
        })
    }

    removeItem = () => {
        this.setState({
            item: null
        })
    }

    render() {
        return <div>
            <input type="text" ref={this.onRef} onInput={this.onInput} />
            <button onClick={this.goToCart}>идти в корзину</button>
            {/* <div>   {this.props.isLoading}</div>
                {({ isLoading, data }) => {
                    if (this.props.isLoading) {
                        return <div>Is Loading...</div>
                    }
                    const filterdData = this.filterItems(qeury, data);
                    return this.props.products.map(item => <ListItem key={item.key} item={item} onPug={this.setCurrentItem} />)
                }} */}
            {this.props.products.map(item => <ListItem history={this.props.history} addToCart={this.addToCart} key={item.key} item={item} />)
            }
        </div>
    }
}

const mapStateToProps = state => ({ ...state.mainPage })
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({
            loadProducts,
            addItem
        },
            dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)