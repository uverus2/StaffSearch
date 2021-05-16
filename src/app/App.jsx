import { hot } from 'react-hot-loader/root';
import React from 'react';
import Router from 'Routing/Router';
import { ThemeProvider } from "styled-components";
import { Helmet } from "react-helmet";

//Resources
import favicon from "Public/icons/favicon.ico";

//Components
import Header from "App/components/MainLayout/Header";
import Footer from "App/components/MainLayout/Footer";
import Spinner from "Components/Spinner/Spinner";
import Error from "Components/ErrorBlock/Error";

//Styles
import theme from "Global/theme.js";
import 'reset-css';
import GlobalStyles from "Global/Global.styled";

//Store
import usersContext from "Store/users";
import errorsContext from "Store/errors";

//Custom Hooks
import useUsers from "Services/useUsers";

const AppRoot = () => {
    const { users, searchUsers, loading, errors, setErrors, loadMoreUsers, setSearchUsers } = useUsers();

    return (
        <>  
            {/* Helmet is a useful library for adding head properties to react apps */}
            <Helmet titleTemplate="%s - Staff Search" defaultTitle="Staff Search">
                <meta name="description" content="Helmet application" />
                <link rel="icon" type="image/png" href={favicon} sizes="16x16" />
            </Helmet>
            <usersContext.Provider value={{ users, searchUsers, loadMoreUsers, setSearchUsers}}>
                <errorsContext.Provider value={{errors, setErrors}}>
                    <ThemeProvider theme={theme}>
                    <GlobalStyles />
                        {/* Page Header */}
                        <Header />
                        <Error />
                        {/* Content */}
                        {loading ? (<Spinner />) : (<Router loadMoreUsers={loadMoreUsers} />) }
                        <Footer />
                    </ThemeProvider>
                </errorsContext.Provider>
            </usersContext.Provider>
        </>
    );
}

export default hot(AppRoot);
