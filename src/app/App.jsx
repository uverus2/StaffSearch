import { hot } from 'react-hot-loader/root';
import React from 'react';
import Router from 'Routing/Router';

import GlobalStyle from 'Global/Global.styled';

const AppRoot = () => (
    <>
        <GlobalStyle />
        <Router />
    </>
);

export default hot(AppRoot);
