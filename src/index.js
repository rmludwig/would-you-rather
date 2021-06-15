import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { createStore } from 'redux';
import {Provider } from 'react-redux';
import reducer from './reducers';
import middleware from './middleware';
import 'bootstrap/dist/css/bootstrap.css';

const store = createStore(reducer, middleware);

// TODO: figure out the "Warning: findDOMNode is deprecated in StrictMode issues"
// https://www.kindacode.com/article/react-warning-finddomnode-is-deprecated-in-strictmode/
// // added to resolve deprecation warnings in this react version
// const nodeRef = React.useRef(null);

ReactDOM.render(
    // <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>,
    // </React.StrictMode>,
    document.getElementById('root')
);
