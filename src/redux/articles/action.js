import {LOAD_ALL_ARTICLES} from '../type'
import axios from 'axios'

export const loadAllArticles = () => async (dispatch) => {

    const request = await axios.get('https://jsonplaceholder.typicode.com/photos?albumId=1');
    console.log(request.data);
    return dispatch ({
        type: LOAD_ALL_ARTICLES,
        payload: request.data,
    })
}