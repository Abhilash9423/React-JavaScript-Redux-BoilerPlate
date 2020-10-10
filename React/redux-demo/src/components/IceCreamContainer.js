import React from 'react';
import { buyIceCream } from '../redux';
import { connect } from 'react-redux'

function IceCreamContainer(props) {
    return (
        <div>
            <h1>Number of ice creams - {props.numberofIceCreams}</h1>
            <button onClick={props.buyIceCream}>buy ice  cream</button>
        </div>
    );
}

const mapStateToProps = state => {
    return{
        numberofIceCreams : state.icecream.numberofIceCreams 
    }
}

const mapDispatchToProps = dispatch => {
    return{
        buyIceCream: ()=> dispatch(buyIceCream()) 
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
    )(IceCreamContainer)