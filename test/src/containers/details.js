import { connect } from 'react-redux';
import React, { Component } from 'react';


class Details extends Component {
     changeDetails(){
        return(<div>
            asdasd
        </div>)
    }
     render(){
         if (!this.props.car)
         return (<p>Выберите автомобиль</p>);
         return(
             <div>
                 <h2>{this.props.car.model}</h2>
                 <img src={this.props.car.img}></img>
                 <p>{this.props.car.details}</p>
                 <button onClick={() =>this.changeDetails() }>идите нахуй</button>
             </div>
         )
        }
     
}

function mapStateToProps(state) {
    return {
        car: state.active,
        cars: state.cars
    };
}

export default connect (mapStateToProps)(Details)