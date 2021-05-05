import { hot } from 'react-hot-loader/root';
import React from 'react';
import Router from 'Routing/Router';

import GlobalStyle from 'Global/Global.styled';
import Example from './components/Example/Example';

const AppRoot = () => (
    <>
        <GlobalStyle />
        {/* Page Header */}
        <Example />
        {/* Content */}
        <Router />
    </>
);

export default hot(AppRoot);
