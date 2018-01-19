import types from '../actions/types';

const DEAFULT_STATE = {
    auth: false
}

export default (state = DEAFULT_STATE, action) => {
    switch(action.type){
        default:
            return state;
    }
}
