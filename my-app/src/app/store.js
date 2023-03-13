import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {ticketsReducer} from "./tickets-reducer";

const rootReducer = combineReducers({
    ticketsReducer: ticketsReducer
})



export const store = configureStore({
    reducer: rootReducer
})


export default store;