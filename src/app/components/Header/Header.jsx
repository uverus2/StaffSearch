import React from 'react';
import { Wrapper, HelloBox, Image } from './Header.style';

import worldImageURL from 'Public/images/world.png';

const Example = () => (
    <Wrapper>
        <HelloBox $align="right">
            <Image src={worldImageURL} alt="World" />
        </HelloBox>
    </Wrapper>
);

export default Example;
