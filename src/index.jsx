import * as React from 'react';
import * as ReactDOM from 'react-dom';
import "regenerator-runtime/runtime";
import { BrowserRouter } from 'react-router-dom';
import App from './app/App';
import './styles/normalize.scss';

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('root')
);
