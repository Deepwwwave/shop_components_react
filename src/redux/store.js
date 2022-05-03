import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import articlesReducer from "./articles/articlesReducer";


// import productReducer from "./reducers/productReducer";

const rootReducer = combineReducers({
    articlesReducer
});


const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

export default store;