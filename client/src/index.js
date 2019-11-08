import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from './reducers';
import {composeWithDevTools} from 'redux-devtools-extension';
import './index.css';
import App from './App';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk, logger)));

ReactDOM.render(<Provider store={store}><Router><App /></Router></Provider>, document.getElementById('root'));
