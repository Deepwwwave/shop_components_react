import {LOAD_ALL_ARTICLES, COUNT_CART, LOAD_ARTICLES_CART} from '../type'
import axios from 'axios'

export const loadAllArticles = () => async (dispatch) => {

    const request = await axios.get('https://jsonplaceholder.typicode.com/photos?albumId=1');
    console.log(request.data);
    return dispatch ({
        type: LOAD_ALL_ARTICLES,
        payload: request.data,
    })
}

export const loadArticlesCart = (datas) => {
    return {
        type:LOAD_ARTICLES_CART,
        payload: datas,

    }
}

export const countCart = () => {
    return {
        type: COUNT_CART,
    }
}

