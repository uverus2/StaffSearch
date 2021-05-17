import styled, { css } from 'styled-components';

//Images
import Hero from 'Public/images/background.jpg';

//Breakpoints
const mobile = ({ theme }) => theme.breakpoints.mobile;
const tablet = ({ theme }) => theme.breakpoints.tablet;

const backgroundImage = css`
    background-repeat: no-repeat;
    background-position: center top;
    background-size: cover;
    padding: 1rem;
    box-sizing:border-box;
    width:100%;

    h1, h2, h5, label{
        color: ${({ theme }) => theme.colors.white};
    }

    @media (max-width: ${mobile}) {
        padding: 0.5rem;
        background-position: 30%;
    }
`;

export const Wrapper = styled.header`
    ${backgroundImage}
    background-image: linear-gradient(
      rgba(0, 0, 0, 0.2),
      rgba(0, 0, 0, 0.2)
    ), url(${Hero});
    margin-top: -5px;
    min-height: 40vh;
    height:100%;
`;

export const FooterWrapper = styled.footer`
    ${backgroundImage}
    background-position: center center;
    height: 40vh;
    image-rendering: crisp-edges;
    image-rendering: -moz-crisp-edges;
    image-rendering: -o-crisp-edges;
    image-rendering: -webkit-optimize-contrast;
    -ms-interpolation-mode: nearest-neighbor;

    h2{
        text-transform: uppercase;
    }

    h2,h5 {
        margin:0;
        padding:0;
    }

    @media (max-width: ${tablet}) {
         height: 35vh;
    }
`;

export const InnerWrap = styled.div`
    width:100%;
    padding: 2rem 0 2rem 0;
`;

export const HeaderSection = styled.div`
    width:100%
    text-align: ${({ $align }) => $align ? $align : 'left'};
`;
