import {  combineReducers } from "redux";
import currencyReducer from "./–°urrencyReducer";

const rootReducer = combineReducers({
    currency: currencyReducer,
})

export default rootReducer