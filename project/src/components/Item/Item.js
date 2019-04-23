import React, { Component } from 'react';

class Item extends Component {
    onClick = () => {
        const {item, onClick} = this.props;
        onClick && onClick(item);
    }

    render() {
        const {item} = this.props;
        const {img, title, subTitle, rate} = item;

        return <div className="list-item" onClick={this.onClick}>
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
                <button>в корзину</button>
            </div>
        </div>
    }
}
export default Item