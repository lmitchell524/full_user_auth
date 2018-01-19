import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './components/app';

// middle argument of createStore is default state almost always empty obj

ReactDOM.render(
    <Provider store={createStore(rootReducer, {}, applyMiddleware(thunk))}>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.getElementById('root')
);
