import React,{useState} from 'react';
import { buyCake } from '../redux';
import { connect } from 'react-redux'

function NewCakeContainer(props) {
    const[number,setNumber] = useState(1)
    return (
        <div>
            <input type='text' value={number} onChange={e=>setNumber(e.target.value)} />
            <h1>Number of cakes - {props.numberOfCakes}</h1>
    <button onClick={()=>props.buyCake(number)}>But {number} </button>
        </div>
    );
}

const mapStateToProps = state => {
    return{
        numberOfCakes : state.cake.numberOfCakes
    }
}

const mapDispatchToProps = dispatch => {
    return{
        buyCake: (number)=> dispatch(buyCake(number)) 
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
    )(NewCakeContainer)