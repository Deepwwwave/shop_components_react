import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

// import cartReducer from "./reducers/cartReducer";
// import productReducer from "./reducers/productReducer";

const rootReducer = combineReducers({
    //vos reducers
});


const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

export default store;