import { DecrementReducer, IncrementReducer, reducerTheme } from "./reducer";
import {  combineReducers } from 'redux'
export const rootReduer=combineReducers({
    themeReducer:reducerTheme, //{}
    increReducer:IncrementReducer, // single value 
  
    
})