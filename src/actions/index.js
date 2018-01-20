import types from './types';
import axios from 'axios';

const BASE_URL = 'http://api.reactprototypes.com';

export function signUp(cred){
    return dispatch => {

        axios.post(`${BASE_URL}/signup`, cred).then(resp => {
            console.log('resp from sign up:', resp);

            localStorage.setItem('token', resp.data.token);

            dispatch({types: types.SIGN_UP});
        });
    }
}

export function signIn(cred){
    return dispatch => {

        axios.post(`${BASE_URL}/signin`, cred).then(resp => {
            console.log('resp from sign in:', resp);

            localStorage.setItem('token', resp.data.token);

            dispatch({types: types.SIGN_IN});
        }).catch( err => {
            dispatch({
                type: types.ERROR,
                payload: 'Invalid login information'
            });
        });
    }
}
