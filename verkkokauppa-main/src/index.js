import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { CurrencySelection } from './components/CurrencyContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <CurrencySelection>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </CurrencySelection>
);


