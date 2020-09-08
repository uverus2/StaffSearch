import 'isomorphic-fetch';

import React from 'react';
import { render } from 'react-dom';
import { ConnectedRouter } from 'connected-react-router/immutable';
import { Provider } from 'react-redux';
import { fromJS } from 'immutable';
import createStore from 'Redux/configureStore';
import { browserHistory } from 'Routing/history';
import rootSaga from 'Redux/sagas';

import App from 'App/App';

const store = createStore(fromJS({}), browserHistory);

store.runSaga(rootSaga);

const client = (
    <Provider store={store}>
        <ConnectedRouter history={browserHistory}>
            <App />
        </ConnectedRouter>
    </Provider>
);

const appElement = document.getElementById('app');

render(client, appElement);

