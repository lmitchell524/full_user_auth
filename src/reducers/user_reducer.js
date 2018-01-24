import types from '../actions/types';

const DEAFULT_STATE = {
    auth: false,
    error: ''
}

export default (state = DEAFULT_STATE, action) => {
    switch(action.type){
        case types.SIGN_IN:
        case types.SIGN_UP:console.log('REDUCER: ', action);
            return { auth: true, error: '' };
        case types.ERROR:
            return { auth: false, error: action.payload };
        case types.LOG_OUT:
            return { auth: false, error: ''};
        default:
            return state;
    }
}
