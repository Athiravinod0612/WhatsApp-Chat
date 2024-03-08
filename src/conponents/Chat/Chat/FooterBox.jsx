import { Box, InputBase, styled } from '@mui/material';
import React from 'react';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import MicIcon from '@mui/icons-material/Mic';
import AttachFileIcon from '@mui/icons-material/AttachFile';


const Container = styled(Box)`
    height: 65px;
    background: #ededed;
    display: flex;
    width: 100%;
    align-items: center;
    padding: 0 15px;
    & > * {
        margin: 5px;
        color: #919191;
    }
`;

const Search = styled(Box)`
    background-color: #FFFFF;
    border-radius:18px;
    width: calc(94% - 100px);
`;

const InputField = styled(InputBase)`
    width: 100%;
    padding: 20px;
    height: 20px;
    padding-left: 25px;
    font-size:14px;
    background-color: white;
    border-radius:10px
`;


function Footer() {
    return (
        <Container>
            <EmojiEmotionsIcon />
            <AttachFileIcon />
            <Search>
                <InputField placeholder='Type a message' />
            </Search>
            <MicIcon />
        </Container>
    );
}

export default Footer;
