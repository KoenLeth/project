import React, { Component } from 'react';
import memo from 'memoize-one';
import '../../styles/App.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import ListItem from '../../components/Main/LisItem';
import { addItem, removeItem } from './actions'

class Cart extends Component {
    
    render() {
        return <div>
            <input type="text" ref={this.onRef} onInput={this.onInput} />
                        {this.props.items.map(item => <ListItem history={this.props.history} key={item.key} item={item} />)
            }
        </div>
    }
}

const mapStateToProps = state => ({ ...state.cartPage })
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({
        addItem, removeItem
        },
            dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)