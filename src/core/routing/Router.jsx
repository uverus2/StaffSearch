import React from 'react';
import { Route, Switch } from 'react-router-dom';
import routes from './routes';

class Router extends React.Component {
    render() {
        return (
            <Switch>
                {routes.map((route, index) => (
                    <Route key={index} {...route} />
                ))}
            </Switch>
        );
    }
}

export default Router;