import styled from 'styled-components';

export const SearchWrap = styled.form`
   width:100%;
   label {
       margin-bottom: 0.5rem;
   }
`;

export const InputWrap = styled.div`
    input, button {
       border:none;
       outline:none;
    }

    input{
       padding:0.7rem;
       width:100%;
       font-size: 1.4rem;

       :focus{
           border: 2px solid  ${({ theme }) => theme.colors.mainRed};
           padding:0.6rem;
       }
   }

   svg{
      margin-top:5px;
      transition: height 0.2s linear;

      :hover{
          height:35px;
      }
   }

   button {
       margin: 2px 0 2px -45px;
       cursor:pointer;
   }
`;