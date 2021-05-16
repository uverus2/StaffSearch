
import React, { useEffect, useContext } from 'react';
import { useLocation, useHistory } from 'react-router-dom';


// Form validation
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

//Images
import SearchIcon from "Public/icons/search.svg";

// Context
import { ErrorContext } from "Store/errors";
import { UsersContext } from "Store/users";


//Styles
import { SearchWrap, InputWrap } from "./Search.styled";

//Define the validation Schema
const schema = yup.object().shape({
    person: yup.string().matches(/^[a-zA-Z\s]*$/,"Only letters and spaces allowed").max(100, "Maximum of 100 characters allowed"),
});

const Search = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm({ resolver: yupResolver(schema)}),
          { setErrors } = useContext(ErrorContext),
          location = useLocation(),
          history = useHistory(),
          { users, setSearchUsers } = useContext(UsersContext);

    useEffect(() => {
        // Self invoking function because I will need this code only once
        (() => {
            //This will check if there are errors in the input like "number was entered" and set the error.
            if (errors?.person) {
                const errorObject = {
                    message: errors.person.message,
                }

                setErrors(errorObject);
            }
        })();
        //It watches if the form error block has changed
    }, [errors]);

    //Handle the submitted data
    const submitSearch = data => {
        setErrors({});

        //Redirect to home if search is tried from another page.
        if (location.pathname !== "/"){
            history.push("/");
        }

        if (users.length > 0){
           const searchResults = users.filter(i => {
               //Create a regex to do a LIKE search
               const name = `${i.name.first} ${i.name.last}`,
                     regexTestStr = new RegExp(`${data.person.toLowerCase()}.*`); 

               return regexTestStr.test(name.toLowerCase());
           });

           //If results are empty then show error
            if (searchResults.length <= 0) {
                const errorObject = {
                    message: "No results found for your search!",
                };

                setErrors(errorObject);
                setSearchUsers(users);

                //Clear error message after 3 seconds
                setTimeout(() => setErrors({}), 3000);
            }else{
                //Else if something is found show the found results and reset the input.
                setSearchUsers(searchResults);
                reset();
            }
       }else{
            setSearchUsers(users);
       }
    };

    return (
        <SearchWrap onSubmit={handleSubmit(submitSearch)} className="container d-flex flex-d-column">
            <label htmlFor="person">Use the search box to get started</label>
            <InputWrap className="d-flex flex-d-row">
                <input autoComplete="off" placeholder="Start typing..." className="b-radius-default" type="text" name="person" {...register('person')} />
                <button area-label="Search Here">
                    <SearchIcon alt="Search Button" />
                </button>
            </InputWrap>
        </SearchWrap>
    );
}

export default Search;