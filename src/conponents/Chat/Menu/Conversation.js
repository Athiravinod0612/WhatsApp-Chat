import styled from '@emotion/styled';
import { Box, Typography } from '@mui/material';
import React from 'react';
function Conversation({ user }) {

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

    return (
        <Component>
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
