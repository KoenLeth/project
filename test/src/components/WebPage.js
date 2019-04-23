import React,{Component} from 'react';
import CarsList from '../containers/car-List'; 
import Details from '../containers/details';

const WebPage = () => (
    <div>
        <h3>Cars:</h3>
        <CarsList></CarsList>
        <hr></hr>
        <h3>Details:</h3>
        <Details onClick={console.log("hiuiuhh")}></Details>
        
    </div>
);
export default WebPage;