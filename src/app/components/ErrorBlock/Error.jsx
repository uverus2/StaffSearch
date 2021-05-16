import React, { useState, useEffect, useContext } from "react";
import { capitalizeFirstLetter, isObjectEmpty } from "Global/functions.js";
import styled from 'styled-components';

// Context
import { ErrorContext } from "Store/errors";

const ErrorWrap = styled.div`
    padding: 1.5rem;
    h2, h3 {
        padding:0;
    }
`;

const Error = () => {
    const { errors } = useContext(ErrorContext),
          [displayError, setDisplayError] = useState("Error");

    useEffect(() => {
       // Self invoking function because I will need this code only once
        (() => {
            const code = errors.statusCode;
            if (code && errors.additionalData) {
                //This will allow for custom error messages and it is easily extendable
                switch (code) {
                    case 404:
                        setDisplayError("No information has been returned to us.");
                        break;
                    case 400:
                        setDisplayError("We have send the wrong data to the API.");
                        break;
                    case 500:
                        setDisplayError("An internal server error has occurred.");
                        break;
                    case 503:
                        setDisplayError("The service is currently not available.");
                        break;
                    default:
                        setDisplayError(errors.additionalData);
                }
                return;
            }

            setDisplayError(capitalizeFirstLetter(errors.message));
        })();
    }, [errors]);

    return (
        <>
            { !isObjectEmpty(errors) && (<ErrorWrap className="text-center color-red">
                <h2> Sorry an error has occured! </h2>
                <h3> { displayError } </h3>
            </ErrorWrap>
            )}
        </>
    );
}

export default Error;