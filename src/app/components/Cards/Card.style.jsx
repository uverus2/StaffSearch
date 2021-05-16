import styled, { css } from 'styled-components';

//Breakpoints
const mobile = ({ theme }) => theme.breakpoints.mobile;
const tablet = ({ theme }) => theme.breakpoints.tablet;
const lgTable = ({ theme }) => theme.breakpoints.lgTable;

const share_image_style = css`
    border-radius: 50%;
    border: solid 4px ${({ theme }) => theme.colors.thirdColor};
`;

const share_align_medium = css`
    @media (max-width: ${lgTable}) {
        text-align:left;
    }
`;

const fullWidth = css`
   width:100%;
`;

const borderDefault = css`
    border: 2px solid ${({ theme }) => theme.colors.thirdColor};
`;

const mr0 = css`
    margin-right: 0;
`;

export const CardWrap = styled.div`
   ${fullWidth}
   ${borderDefault}
    max-height:100px
    padding: 1rem;
    margin: 1rem 0;
    background: ${({ theme }) => theme.colors.white};
    box-shadow: 0 0 5px ${({ theme }) => theme.colors.thirdColor};
    transition: max-width 0.2s linear, box-shadow 0.2s linear;

    :hover{
        box-shadow: 0 0 20px ${({ theme }) => theme.colors.mainRed};
        border: 2px solid ${({ theme }) => theme.colors.mainRed}
        max-width: 800px;
        cursor:pointer;

        @media (max-width: ${tablet}) {
            max-width: 95%;
        }
    }

    .force-red{
        svg, g {
            stroke: ${({ theme }) => theme.colors.mainRed} !important;
        }

        img{
           border-color: ${({ theme }) => theme.colors.mainRed} !important;
        }
    }

    @media (max-width: ${mobile}) {
        padding: 0.5rem;
    }
`;

export const SingleCardWrap = styled.div`
    img{
        ${share_image_style};
        width:100px;
        height:100px;
    }

    h2{
        margin:0;
        padding:0.5rem 0;
    }

    .expand{
       visibility: visible;
       max-height:100%;
    }

    .collapse{
       max-height:0;
       overflow: hidden;
       margin: 0;
       visibility: hidden;
    }

    @media (max-width: ${tablet}) {
        box-sizing: border-box;
        padding: 2rem;
    }
`;

export const UserDetails = styled.div`
    align-items: center;
    ${fullWidth}

    img{
        ${share_image_style};
        width:60px;
        height:60px;
    }


    h5{
        padding:0 0 0 1rem;
    }
`;

export const OtherDetails = styled.div`
    margin:1rem 0;
    display: grid;
    grid-template-rows: 1fr;
    grid-gap: 30px;
    grid-template-columns: auto auto auto;

    div{
        display:flex;
        align-items:center;
        justify-content:center;

        svg{
            margin-right: 10px;
            path {
               fill: ${({ theme }) => theme.colors.thirdColor};
            }
        }
    }

    @media (max-width: ${lgTable}) {
       grid-template-columns: auto;
       grid-template-rows: 1fr 1fr 1fr;
    }
`;

export const MoreDetails = styled.div`
    width: 100%;
    margin: 1rem 0;
    padding: 0.5rem 1rem;
    background: ${({ theme }) => theme.colors.white};
    ${borderDefault}
    color: ${({ theme }) => theme.colors.mainRed};
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-areas: " location location location"
                         " gender nat age"
                         " reg reg reg";
    grid-gap: 5px;
    transition:max-height 0.3s linear;

    .header{
        color: #000;
        font-weight: bold;
        margin-right: 5px;
    }

    .location{
        grid-area: location;

        div {
            display: flex;

            p {
                margin-right: 5px;

                :last-child {
                   ${mr0}
                }
            }

            @media (max-width: ${lgTable}) {
               flex-direction: column;
                p {
                   ${mr0}
                }
            }
        }
    }

    .age{
        text-align:right;
        grid-area: age;
        ${share_align_medium}
    }
    
    .gender{
        grid-area: gender;
    }

    .nat{
        text-align:center;
        grid-area: nat;
        ${share_align_medium}
    }

    .reg{
        grid-area: reg;
    }

    @media (max-width: ${tablet}) {
        grid-template-columns: 1fr;
        grid-template-areas: " location "
                             " gender "
                             " age "
                             " nat "
                             " reg " ;
    }

`;

export const CoverButton = styled.button`
    background: ${({ theme }) => theme.colors.white};
    text-align: right;
   ${fullWidth}
    border:none;
    outline:none;

    :hover{
        cursor:pointer;
    }
`;