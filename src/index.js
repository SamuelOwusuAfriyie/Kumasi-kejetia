import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom'
import {Provider} from "react-redux";
import thunk from 'redux-thunk'
import {createStore, applyMiddleware} from "redux";
import reducers from "./reducers.js";

///const middleware = [thunk]

let store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(thunk));



let Root = () => (
  <Provider store={store}>
    <BrowserRouter>
    <App/>
  </BrowserRouter>
  </Provider>
)

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
