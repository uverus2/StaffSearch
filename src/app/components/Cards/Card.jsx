import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { returnTrueString } from "Global/functions.js";
import { useHistory } from "react-router-dom";

//Styles
import { CardWrap, UserDetails, CoverButton } from "./Card.style";

//Resources
import CircleArrow from "Public/icons/circle-arrow.svg";

const Card = (props) => {
    const { user } = props,
          [hoverOn, setHover] = useState(false),
          history = useHistory();

    const userName = () => {
        //Return the User's name or "John Doe" if the name is not returned
        if(user?.name){
            return `${returnTrueString(user.name?.first)} ${returnTrueString(user.name?.last)}`
        }

        return "John Doe";
    };

    const toggleHover = () => setHover(!hoverOn);

    function goToProfile() {
            //Check if the UUID is there and if not set ID as error
            //Profile page will deal with the error display
            const id = user?.login?.uuid ? user.login.uuid : "error";
            history.push(`/profile/${id}`);
    }

    return (
        //OnMouseEnter and Leave simulates a hover which is used to add the force-red classes
        <CardWrap onMouseEnter={toggleHover} onMouseLeave={toggleHover} onClick={goToProfile} className="container d-flex flex-d-row b-radius-default">
            <UserDetails className={`d-flex flex-d-row ${hoverOn ? "force-red" : ""}`}>
                <img src={user.picture.thumbnail} alt={`User ${userName()}`}/>
                <h5>{userName()}</h5>
            </UserDetails>
            <CoverButton className={`${hoverOn ? "force-red" : ""}`} role="button" aria-label="View Profile here">
                <CircleArrow alt="View Profile Button"/>
            </CoverButton>
        </CardWrap>
    );
}

Card.propTypes = {
    user: PropTypes.object.isRequired
}

Card.defaultProps = {
    user: {}
};


export default Card;