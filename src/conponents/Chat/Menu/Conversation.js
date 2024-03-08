import styled from '@emotion/styled';
import { Box, Typography } from '@mui/material';
import React from 'react';
import { useContext } from 'react';
import { AccountContext } from '../../Context/AccountProvider';
import { setConversation } from '../../../Service/Api';


const Component = styled(Box)`
    display: flex;
    height: 45px;
    padding: 13px 0;
    cursor: pointer;
    `;
const Img = styled("img")({
    width: 50,
    height: 50,
    borderRadius: "50%",
    padding: "0 14px",
    objectFit: "cover"
})



function Conversation({ user }) {

    const { setPerson, account } = useContext(AccountContext)

    const getUser = async () => {
        setPerson(user);
        await setConversation({ senderId: account.sub, receriverId: user.sub })

    }

    return (
        <Component onClick={() => getUser()}>
            <Box>
                <Img src={user.picture} alt='DP' />
            </Box>
            <Box>
                <Typography>{user.name}</Typography>
            </Box>
        </Component>
    );
}

export default Conversation;
