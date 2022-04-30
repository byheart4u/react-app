import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';

import '/node_modules/bootstrap/dist/css/bootstrap.min.css';

ReactDom.render(
                    <BrowserRouter>
                        <App />
                    </BrowserRouter>, 
                    document.getElementById('root')
                );