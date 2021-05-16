import React from 'react';
import { FooterWrapper, HeaderSection, InnerWrap } from './Header.style';

const Footer = () => {
    return (
        <FooterWrapper className="d-flex flex-center flex-d-column">
            <InnerWrap>
                <HeaderSection $align="center">
                    <h2>Staff Search &#128079;</h2>
                    <h5>The best search platform out there.</h5>
                </HeaderSection>
            </InnerWrap>
        </FooterWrapper>
    );
}

export default Footer;