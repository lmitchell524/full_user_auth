import types from '../actions/types';

const DEAFULT_STATE = {
    quote: ''
}

export default (state = DEAFULT_STATE, action) => {
    switch(action.type){
        case types.GET_QUOTE:
            return { quote: action.payload };
        default:
            return state;
    }
}
