import axios from 'axios';
import { get } from 'https';

export const FETCH_DATA_START = "FETCH_DATA_START";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";

export const swapiActionCreator = () => dispatch => {
    dispatch({ type: FETCH_DATA_START });
    axios
        .get("https://swapi.co/api/people/")
        .then(res => {
            dispatch({
                type: FETCH_DATA_SUCCESS,
                payload: res.data.results
            })
            console.log(res.data.results)
        })
        .catch(err => {
            dispatch({
                type: FETCH_DATA_FAILURE,
                payload: err
            })
        })
}
