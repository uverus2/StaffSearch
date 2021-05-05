import styled from 'styled-components';

export const Wrapper = styled.div`
    background: #dbe3ff;
    padding: 5rem;
`;

export const HelloBox = styled.div`
    font-size: 2rem;
    text-align: ${({ $align }) => $align ? $align : 'left'};
`;

export const Image = styled.img`
    width: 7rem;
    height: 7rem;
`;
