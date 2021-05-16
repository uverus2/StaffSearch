import React from 'react';
import { Wrapper, HeaderSection, InnerWrap } from './Header.style';

//Components
import Search from "Components/Search/Search"; 

const Header = () => { 
    return (
        <Wrapper>
            <InnerWrap className="d-flex flex-center flex-d-column">
                <HeaderSection className="container" $align="left">
                    <h1>Find a member of staff</h1>
                </HeaderSection>
                <Search />
            </InnerWrap>
        </Wrapper>
    );
}

export default Header;
