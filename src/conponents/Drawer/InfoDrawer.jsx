import { Box, Drawer, Typography } from '@mui/material';
import React from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import styled from '@emotion/styled';
import Profile from './Profile';



const drawerStyle = {
    left: 20,
    top: 17,
    height: "95%",
    width: "28%",
    boxShadow: "none",
    backgroundColor: "#f0f2f5"
}
const Header = styled(Box)`
    background:#008069;
    color:#FFFFFF;
    height:107px;
    display:flex;
    &>svg, &>p {
        margin-top:auto;
        padding:15px;
        font-Weight:600;
    }
`;

const Text = styled(Typography)`
    font-size:14px
`;

const InfoDrawer = ({ open, setopen }) => {

    const handleClose = () => {
        setopen(false);
    }


    return (
        <Drawer
            open={open}
            onClose={handleClose}
            PaperProps={{ sx: drawerStyle }}
            style={{ zIndex: 1500 }}
        >
            <Header>
                <ArrowBackIcon onClick={() => setopen(false)} />
                <Text>Profile</Text>
            </Header>
            <Box>
                <Profile />
            </Box>
        </Drawer>
    );
}

export default InfoDrawer;
