import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import thunk from 'redux-thunk'
import { playerReducer } from './player.reducer.js';


import { stationReducer } from './station.reducer.js'
import { userReducer } from './user.reducer.js';


const rootReducer = combineReducers({
    stationModule: stationReducer,
    userModule: userReducer,
    playerModule: playerReducer
})



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))