import React from 'react';
import { FooterWrapper, HeaderSection, InnerWrap } from './Header.style';

//Custom Hooks
import useNasa from "Services/useNasa";
const Footer = () => {
    const { pod } = useNasa();

    const bgStyle = `linear-gradient(
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5)
    ), url("${pod.url}")`;

    return (
        <FooterWrapper style={{ backgroundImage: bgStyle}} className="d-flex flex-center flex-d-column">
            <InnerWrap>
                <HeaderSection $align="center">
                    <h2>{pod.title} &#128079;</h2>
                    <h5>&#169; {pod.subTitle}</h5>
                </HeaderSection>
            </InnerWrap>
        </FooterWrapper>
    );
}

export default Footer;