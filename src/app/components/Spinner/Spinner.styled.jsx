import styled from 'styled-components';

export const SpinnerWrap = styled.div`
    min-height: 50vh;
    min-width: 100vw;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction: column;

    .load-message {
        font-size: 2rem;
    }
`;