import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from 'App/App';

const client = ( 
    <BrowserRouter>
        <App />
    </BrowserRouter>
);

const appElement = document.getElementById('app');

render(client, appElement);