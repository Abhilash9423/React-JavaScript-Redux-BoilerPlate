import React from 'react';
import {useSelector,useDispatch} from 'react-redux'
import { buyCake } from '../redux';


function HooksCakeContainer() {
    const  numOfCakes = useSelector(state => state.cake.numberOfCakes)
    const dispatch = useDispatch()
    return (
        <div>
            <h2>num of cakes - {numOfCakes} </h2>
            <button onClick={()=>dispatch(buyCake())} > buy a cake</button>
        </div>
    );
}

export default HooksCakeContainer;