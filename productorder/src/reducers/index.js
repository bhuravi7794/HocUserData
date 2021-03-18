import { combineReducers } from "redux";

import products from 'reducers/products/';
import edit from 'reducers/edit/';

export default combineReducers({
    products,
    edit
});