import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'
import {
    createStore,
    applyMiddleware
} from 'redux';
import thunk from 'redux-thunk'
import api from './middleware/api'
import { movieReducers } from './reducers/movieReducer';
import { BrowserRouter as Router } from 'react-router-dom'

const middleware = applyMiddleware(thunk, api)
const store = createStore(
    movieReducers,
    window.devToolsExtension && window.devToolsExtension(),
    middleware)


ReactDOM.render(
    <Provider store={store}>
        <Router basename={process.env.PUBLIC_URL}>
            <App />
        </Router>
    </Provider>, document.getElementById('root'));
registerServiceWorker();
