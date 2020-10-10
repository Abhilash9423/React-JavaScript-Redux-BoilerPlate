const redux = require('redux')
const createStore = redux.createStore
const combineReducer =redux.combineReducers
const applyMIdleware = redux.applyMiddleware
const reduxlogger = require('redux-logger')
const logger = reduxlogger.createLogger()
const BUY_CAKE = 'BUY_CAKE'


function buyCake() {
    return{
        type: BUY_CAKE,
        info:'First redux action',
        payload:2
    }
}


//(previousState,action) => newState

const initialState= {
    numofCakes:10
}
const initialCakeState = {
    numofIceCreams:20
}

const reducer = (state=initialState , action) => {
    switch(action.type){
        case BUY_CAKE:
            return{
                ...state,
                numofCakes:state.numofCakes - action.payload
        }
        default: return state
    }
}
const rootReducer = combineReducer({
    cake:reducer
})
const store = createStore(rootReducer,applyMIdleware(logger))
console.log('initial state',store.getState())
const unsubscribe = store.subscribe(() =>{})
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
unsubscribe()

