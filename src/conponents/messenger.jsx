import React from 'react';
import Login from './Account/Login';
import { AppBar, Toolbar, styled, Box } from '@mui/material'
import { useContext } from 'react';

import { AccountContext } from './Context/AccountProvider';
import ChatDialog from './Chat/ChatDialog';


const Header = styled(AppBar)`
    height: 125px;
    background-color: #00a884;
    box-shadow: none;

    `;
const LoginHeader = styled(AppBar)`
    height: 220px;
    background-color: #00a884;
    box-shadow: none;

    `;
const Component = styled(Box)`
    height: 100vh;
    background: #DCDCDC
    `;

const Messenger = () => {
    const { account } = useContext(AccountContext);

    return (
        <Component>
            {
                account ?
                    <><Header>
                        <Toolbar>

                        </Toolbar>
                        <ChatDialog />
                    </Header>
                        <ChatDialog />
                    </>

                    :
                    <>
                        <LoginHeader>
                            <Toolbar>

                            </Toolbar>
                        </LoginHeader>

                        <Login /></>
            }

        </Component>
    );
}

export default Messenger;
