import React, { Component } from 'react';
import axios from 'axios';
import memo from 'memoize-one';
import '../../styles/App.css';
import Item from '../../components/Item/Item'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { loadItem } from './actions'

class ItemPage extends Component {
    componentWillMount(){
                this.props.actions.loadItem(this.props.match.params.itemKey)
    }
   render (){
    return(<Item item={this.props.item}></Item>)
   }
}


const mapStateToProps = state => ({ ...state.itemPage })
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({
            loadItem
        },
            dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ItemPage)