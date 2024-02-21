import React from 'react';
import Login from './Account/Login';
import { AppBar, Toolbar, styled, Box } from '@mui/material'

const Header = styled(AppBar)`
height: 220px;
background-color: #00a884;
box-shadow: none;

`;
const Component = styled(Box)`
height: 100vh;
background: #DCDCDC
`;

const messenger = () => {
    return (
        <Component>
            <Header>
                <Toolbar>

                </Toolbar>
            </Header>

            <Login />
        </Component>
    );
}

export default messenger;
