import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";

const ButtonElement = styled.button`
    padding:15px;
    width:100%;
    color: ${({ theme }) => theme.colors.white};
    background: ${({ theme }) => theme.colors.mainRed};
    border: 1px solid ${({ theme }) => theme.colors.thirdColor};
    font-weight:bold;

    :hover{
        background: ${({ theme }) => theme.colors.white};
        color:${({ theme }) => theme.colors.mainRed};
    }
    :focus{
        outline:none;
    }
`;

function Button(props) {
    const { text, area, onClick } = props;
    return (
        <ButtonElement className="b-radius-default" aria-label={area} onClick={onClick}> {text} </ButtonElement>
    )
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    area: PropTypes.string.isRequired
}

Button.defaultProps = {
    text: 'Click Me',
    area: 'Button for clicking'
};

export default Button