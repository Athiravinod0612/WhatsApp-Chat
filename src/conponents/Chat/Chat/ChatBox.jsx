import React from 'react';
import ChatHeader from './ChatHeader';
import Messages from './Messages';
import { Box } from '@mui/material';
import { AccountContext } from '../../Context/AccountProvider';
import { useContext } from 'react';

function ChatBox() {

    const { person } = useContext(AccountContext)



    return (
        <Box style={{ height: '75%' }}>
            <ChatHeader user={person} />
            <Messages person={person} />
        </Box>
    );
}

export default ChatBox;
