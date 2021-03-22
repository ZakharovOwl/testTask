import {  combineReducers } from "redux";
import currencyReducer from "./СurrencyReducer";

const rootReducer = combineReducers({
    currency: currencyReducer,
})

export default rootReducer