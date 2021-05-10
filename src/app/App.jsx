import { hot } from 'react-hot-loader/root';
import React from 'react';
import Router from 'Routing/Router';
import { ThemeProvider } from "styled-components";

//Components
import Header from "./components/Header/Header";

//Styles
import theme from "./global/theme.js";
import GlobalStyles from "./global/Global.styled";

//Store
import usersContext from "../store/users";

//Custom Hooks
import useUsers from "../services/useUsers";

const AppRoot = () => {
    const { users, errors, loadMoreUsers } = useUsers();
    console.log(users);
    return (
        <>
            <usersContext.Provider value={users}>
                <ThemeProvider theme={theme}>
                <GlobalStyles />
                    {/* Page Header */}
                    <Header />
                    <button onClick={loadMoreUsers}>Load More</button>
                    {/* Content */}
                    <Router />
                </ThemeProvider>
            </usersContext.Provider>
        </>
    );
}

export default hot(AppRoot);
