import * as React from 'react';
import * as ReactDOM from 'react-dom';
import "regenerator-runtime/runtime";
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from "redux";
import { BrowserRouter } from 'react-router-dom';
import { rootReducer } from "./reducers";
import { composeWithDevTools } from 'redux-devtools-extension';
import App from './app/App';
import createSagaMiddleWare from 'redux-saga';
import rootSaga from './sagas';
import './styles/normalize.scss';

const sagaMiddleWare = createSagaMiddleWare();

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleWare)));

sagaMiddleWare.run(rootSaga);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'));
