import Home from 'Pages/Homepage';
import Profile from 'Pages/Profile';
import Errors from 'Pages/Errors';

export default [{
        path: '/',
        exact: true,
        component: Home
    },
    {
        path: '/profile/:id',
        exact: true,
        component: Profile
    },
    {
        path: '*',
        exact: false,
        component: Errors
    }
];