import styled, {css} from 'styled-components';

//Resources
import Lines from "Public/images/bg-matrix.png";

//Breakpoints
const tablet = ({ theme }) => theme.breakpoints.tablet;

const fullWidth = css`
   width:100%;
`;

export const MainWrap = styled.section`
   ${fullWidth}
   padding-bottom: 3rem;
   background-image: linear-gradient(
      rgba(255, 255, 255, 0.2),
      rgba(255, 255, 255, 0.2)
    ), url(${Lines});
   background-attachment: fixed;
   background-size: cover;
   background-position:center;

   @media (max-width: ${tablet}) {
      h2{
         text-align:center;
      }
   }

   &.error-padding{
      h2{
         margin-bottom:0;
         padding-bottom:0;
      }

      h4{
         margin-top:0;
         padding-top:1rem;
      }
   }
`;

export const ButtonsWrap = styled.div`
   ${fullWidth}
    button{
       max-width: 250px;
       margin: 0.5rem 0;
    }
`;

export const GoBackBlock = styled.div`
   text-align: left;
  ${fullWidth}

   button {
      color: ${({ theme }) => theme.colors.thirdColor};
      background: none;
      border: none;
      width: auto;

      :hover{
         background: none;
      }
   }
`;