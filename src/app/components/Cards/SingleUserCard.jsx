import React from 'react';
import { isObjectEmpty, formatNationality, capitalizeFirstLetter } from "Global/functions.js";
import Moment from 'react-moment';
import PropTypes from 'prop-types';

//Styles
import { SingleCardWrap, OtherDetails, MoreDetails } from "./Card.style";

//Resources
import Phone from "Public/icons/phone.svg";
import Email from "Public/icons/email.svg";
import Dob from "Public/icons/dob.svg";

const SingleUserCard = (props) => {
    const { user, isOpen } = props;
    const displayName = () => {
        //Check if user and name is present and return name with title
        if (!isObjectEmpty(user) && user?.name) {
            const nameObj = user.name;
            return `${nameObj.title} ${nameObj.first} ${nameObj.last}`;
        }
    };

    return(
        <SingleCardWrap className="d-flex flex-d-column flex-center">
            <img src={user?.picture?.medium} alt={`User ${displayName()}`} />
            <h2>{displayName()}</h2>
            <OtherDetails>
                <div>
                    <Email alt="Email Icon"/>
                    <a target="_blank" title="You will send the email to the selected user" href={`mailto: ${user.email}`}>{user.email}</a>
                </div>
                <div>
                    <Dob alt="Crown Icons which signifies DOB"/>
                    <Moment className="mt-small" format="DD/MM/YYYY">{user.dob?.date}</Moment>
                </div>
                <div>
                    <Phone alt="Phone Icon"/>
                    <a target="_blank" title="You will call the selected user" href={`tel: ${user.phone}`}>{user.phone}</a>
                </div>
            </OtherDetails>
            <MoreDetails className={`b-radius-default ${isOpen ? "expand" : "collapse"}`}>
                <div className="location">
                    <div>
                        <p className="header">Location: </p>
                        <p> {user.location?.street?.number}, </p>
                        <p> {user.location?.street?.name}, </p>
                        <p> {user.location?.city}, </p>
                        <p> {user.location?.state}, </p>
                        <p> {user.location?.postcode}, </p>
                        <p> {user.location?.country}</p>
                    </div>
                </div>
                <div className="gender">
                    <p> <span className="header"> Gender: </span> {capitalizeFirstLetter(user.gender)}</p>
                </div>
                <div className="nat">
                    <p><span className="header">Nationality:</span> {formatNationality(user.nat)}</p>
                </div>
                <div className="age">
                    <p><span className="header">Age:</span> {user.dob?.age} years old</p>
                </div>
                <div className="reg">
                    <p> <span className="header">Account created:</span>
                        <Moment className="mr-small" format="DD/MM/YYYY">{user.registered?.date}</Moment>
                        (<Moment fromNow>{user.registered?.date}</Moment>)
                    </p>
                </div>
            </MoreDetails>
        </SingleCardWrap>
    );
}

SingleUserCard.propTypes = {
    user: PropTypes.object.isRequired,
    isOpen: PropTypes.bool.isRequired
}

SingleUserCard.defaultProps = {
    user: {},
    isOpen: false
};

export default SingleUserCard