import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {ticketsReducer} from "./tickets-reducer";
import {userReducer} from "./user-reducer";

const rootReducer = combineReducers({
    ticketsReducer: ticketsReducer,
    user: userReducer,
})



export const store = configureStore({
    reducer: rootReducer
})


export default store;