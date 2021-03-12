import React from 'react';

import { Wrapper, HelloBox, Image } from './Example.styled';
import PhoneSVG from 'Public/icons/phone.svg';

import worldImageURL from 'Public/images/world.png';

const Example = () => (
    <Wrapper>
        <HelloBox>
            Hello world :) Want to <PhoneSVG />?
        </HelloBox>
        <HelloBox $align="right">
            Hello :) Can do!
            <Image src={worldImageURL} alt="World" />
        </HelloBox>
    </Wrapper>
);

export default Example;
