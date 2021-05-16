import React, { useContext, useEffect, useState} from 'react';
import { Helmet } from "react-helmet";

//Components
import Card from "Components/Cards/Card";
import Button from "Components/Button/Button";

// Context
import usersContext from "Store/users";

//Styles
import { MainWrap, ButtonsWrap } from "Global/PageStyles";

const Homepage = function () {
    const { users, searchUsers, loadMoreUsers, setSearchUsers } = useContext(usersContext),
          [ localUsers, setLocalUsers ] = useState([]);


    useEffect(() => {
        //First time we land here we use all users.
        (() => {
            setLocalUsers(users);
        })();
    }, []);

    useEffect(() => {
        //Watch for changes in the search users and add it to the state which will display the results.
        //If there is a change but not results we do nothing.
        (() => {
            if (searchUsers.length > 0){
                setLocalUsers(searchUsers);
            }
        })();
    }, [searchUsers]);

    const resetUsers = () => {
        //Clear search users and use the original user array to populate the search again
        setLocalUsers(users);
        setSearchUsers([]);
    }

    let Cards = localUsers.map((user, index) => {
        return (<Card user={user} key={index} />)
    });


    return (
        <>
            <Helmet>
                <title>Homepage</title>
                <meta name="description" content="This is the main page of the website. Here you can freely search for users." />
            </Helmet>
            <MainWrap className="d-flex flex-center flex-d-column">
            <h2>Welcome to Staff Search</h2>
            {Cards}
            <ButtonsWrap className="d-flex flex-center flex-d-column">
                {searchUsers.length > 0 ? 
                (<Button onClick={resetUsers} text="Clear Search" area="Clear search results button"></Button>) 
                    :
                ( <Button onClick={loadMoreUsers} text="Load More" area="Load more button" /> )}
            </ButtonsWrap>
            </MainWrap>
       </>
    );
};

export default Homepage;
