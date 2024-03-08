import { Box } from '@mui/material';
import React from 'react';
import styled from '@emotion/styled';
import Footer from './FooterBox';

const Wrapper = styled(Box)`
    background-image: url(${'https://i.pinimg.com/564x/98/da/8f/98da8f9306de27424460d16e53938b72.jpg'});
    background-size: 50%;

`;

const Component = styled(Box)`
    height:77.5vh;
    overflow-y: scroll;
`;



function Messages() {
    return (
        <Wrapper>
            <Component>
            </Component>
            <Footer />

        </Wrapper>
    );
}

export default Messages;
