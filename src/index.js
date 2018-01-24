import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { BrowserRouter as Router } from 'react-router-dom';
import types from './actions/types';

import App from './components/app';

// middle argument of createStore is default state almost always empty obj

const store = createStore(rootReducer, {}, applyMiddleware(thunk));

if(localStorage.getItem('token')){
    store.dispatch({ type: types.SIGN_IN })
}

ReactDOM.render(
    <Provider store={ store }>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.getElementById('root')
);
