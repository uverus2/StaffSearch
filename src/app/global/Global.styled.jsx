import { createGlobalStyle } from 'styled-components';

//Breakpoints
const tablet = ({ theme }) => theme.breakpoints.tablet;

export default createGlobalStyle`

    body {
        padding: 0;
        margin: 0;
    }

    body, input, button, textarea {
        font-size: 1rem;
        background: ${({ theme }) => theme.colors.secondaryGray};
        font-family: Calibri, 'Trebuchet MS', sans-serif;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        padding: 1rem 0;
    }

    h1 {
        font-size: 4.5rem;
    }


    h2 {
        font-size: 2.5rem;
    }

    h4 {
        font-size: 1.5rem;
    }

    h5 {
        font-size: 1.2rem;
    }

    label {
        font-size: 1.5em;
    }

    a {
        color: #000;
        text-decoration: none;

        :hover{
            color: ${({ theme }) => theme.colors.mainRed};
            text-decoration: underline;
        }
    }


    .container {
        max-width: 600px;

        @media (max-width: ${tablet}) {
            max-width: 90%;
            box-sizing:border-box;
        }
    }

    .mt-small {
        margin-top: 0.2rem;
    }

    .mt-medium {
        margin-top: 2rem;
    }

    .mr-small{
        margin-right: 0.2rem;
    }

    .d-flex{
        display:flex;
    }

    .flex-center{
        justify-content:center;
        align-items:center;
    }

    .flex-d-row{
        flex-direction:row;
    }

    .flex-d-column{
        flex-direction:column;
    }

    .text-center {
        text-align:center;
    }

    .color-red{
         color: ${({ theme }) => theme.colors.mainRed};
    }

    .b-radius-default {
        border-radius: 0.3rem;
    }

`;