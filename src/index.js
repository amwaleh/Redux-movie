import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'
import {
    createStore,
    combineReducers,
    applyMiddleware
} from 'redux';
import thunk from 'redux-thunk'
import api from './middleware/api'
import { movieReducers } from './reducers/movieReducer';

const reducers = combineReducers(movieReducers)
const middleware = applyMiddleware(thunk, api)
const store = createStore(
    movieReducers,
    // {data: []},
    window.devToolsExtension && window.devToolsExtension(),
    middleware)
// store.dispatch(fetchAll())


ReactDOM.render(
<Provider store={store}>
<App/>
</Provider>, document.getElementById('root'));
registerServiceWorker();
