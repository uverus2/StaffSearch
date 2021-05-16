import React, { useContext, useEffect, useState } from 'react';
import { useParams, useHistory } from "react-router-dom";
import { Helmet } from "react-helmet";

// Context
import { ErrorContext } from "Store/errors";
import { UsersContext } from "Store/users";

//Components
import Button from "Components/Button/Button";
import SingleUserCard from "App/components/Cards/SingleUserCard";

//Styles
import { MainWrap, ButtonsWrap, GoBackBlock } from "Global/PageStyles";

const Profile = () => {
    const { users } = useContext(UsersContext),
          { id } = useParams(),
          [ currentUser, setCurrentUser ] = useState({}),
          [isOpen, setOpen] = useState(false),
          [ isPageValid , setValidPage] = useState(true),
          history = useHistory(),
          { setErrors } = useContext(ErrorContext);


    const setProfileError = (error) => {
        //Function that will set the error messages
        let errorObject = {
            message: error
        };

        setErrors(errorObject);
        setValidPage(false);
    }

    useEffect(() => {
        (() => {
            //If Link is broken error is shown
            if (id === "error") {
                setProfileError("There is a problem with this profile!");
            }else{
                const findUser = users.find(user => user.login.uuid === id);
                setCurrentUser(findUser);

                //In case user is not found we show an error. It could happen when page is refreshed and state is cleared
                if (!findUser) {
                    setProfileError("User was not found on our system.");
                }
            }
        })();
    }, []);

    const goBack = () => {
        //Clear errors and go back home
        setErrors({});
        history.push("/");
    };

    const Back = () => {
        //Normal button
        return (<Button onClick={goBack} text="&#8592; Go Back!" area="Please go back." />);
    }

    const toggleMoreInformation = () => setOpen(!isOpen);

    return (
        <>
            <Helmet>
                <title>User Profile</title>
                <meta name="description" content="The profile page will display a user's profile which you have selected via the home page" />
            </Helmet>
            <MainWrap className="d-flex flex-center flex-d-column">
                {isPageValid && (
                    <>
                    <GoBackBlock>
                        <Back />
                    </GoBackBlock>
                    <SingleUserCard isOpen={isOpen} user={currentUser}/>
                    </>
                )}

                <ButtonsWrap className="d-flex flex-center flex-d-column">
                    {isPageValid ?
                        (<Button onClick={toggleMoreInformation}
                            text={`${isOpen ? "Less" : "More"} Information`} 
                            area={`Show ${isOpen ? "less" : "more"} user information`} />)
                        :
                        (
                        <ButtonsWrap className="d-flex flex-center mt-medium">
                            <Back />
                        </ButtonsWrap>
                       )}
                </ButtonsWrap>
            </MainWrap>
        </>
    );
};

export default Profile;
