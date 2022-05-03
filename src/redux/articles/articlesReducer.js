import {LOAD_ALL_ARTICLES, LOAD_ARTICLES_CART} from "../type"

const INITIAL_STATE = {
    articles: [],
    articlesCart: [],
    countCart: 0,
}

const articlesReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case LOAD_ALL_ARTICLES:
            return {
                ...state,
                articles: action.payload
            }
        case LOAD_ARTICLES_CART:
            return {
                ...state,
                articlesCart: action.payload
            }    
            default:
                return state

    }
}

export default articlesReducer