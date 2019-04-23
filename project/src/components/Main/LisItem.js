import React, { Component } from 'react';

class ListItem extends Component {
    onPug = () => {
        this.props.history.push(`/item/${this.props.item.key}`)
    }
    addToChart = e => {
        e.stopPropagation()
        this.props.addToCart(this.props.item)
    }
    render() {
        const { item } = this.props;
        const { img, title, subTitle, rate } = item;

        return <div className="list-item" onClick={this.onPug}>
            <div className="list-item__block list-item__img-wr">
                <img alt="" src={img} />
            </div>

            <div className="list-item__block">
                <div className="list-item__title">{title}</div>
                <div className="list-item__sub-title">{subTitle}</div>
                <div className="list-item__rate">
                    <span>Rate</span>
                    <b>{rate}</b>
                </div>
                <button onClick={this.addToChart}>в корзину</button>
            </div>
        </div>
    }
}

export default ListItem