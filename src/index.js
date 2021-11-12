import React from 'react';
import ReactDOM from 'react-dom';


import App from './components/App'
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import rootReducer from './reducers/index'
import { devToolsEnhancer } from 'redux-devtools-extension'

const store = createStore(rootReducer, devToolsEnhancer())
ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root'),

);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
