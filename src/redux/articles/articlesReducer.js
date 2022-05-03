import {LOAD_ALL_ARTICLES} from "../type"

const INITIAL_STATE = {
    articles: [],
}

const articlesReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case LOAD_ALL_ARTICLES:
            return {
                ...state,
                articles: action.payload
            }
            default:
                return state
    }
}

export default articlesReducer