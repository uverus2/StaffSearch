import React from 'react';
import { useHistory } from "react-router-dom";
import { Helmet } from "react-helmet";

//Styles
import { MainWrap, ButtonsWrap } from "Global/PageStyles";

//Components
import Button from "Components/Button/Button";

const Errors = () => {
    const history = useHistory();

    const goBack = () => {
        history.push("/");
    };

    return (
        <>
        <Helmet>
            <title>ERROR</title>
            <meta name="description" content="An Error has occurred. Please go back!" />
        </Helmet>
        <MainWrap className="color-red d-flex flex-center flex-d-column error-padding">
            <h2>There has been an error or the page does not exist!</h2>
            <h4>Please return to the Homepage</h4>
            <ButtonsWrap className="d-flex flex-center flex-d-column">
                <Button onClick={goBack} text="&#127968; Go to Home" area="Please go back to the homepage."/>
            </ButtonsWrap>
        </MainWrap>
        </>
    );
};

export default Errors;