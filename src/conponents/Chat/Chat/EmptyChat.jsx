import { Box, Typography } from '@mui/material';
import React from 'react';
// import { emptyProfilePicturee } from "../../Constants/Data"
import { qrCodeImage } from "../../Constants/Data"
import styled from '@emotion/styled';
// import { Link } from 'react-router-dom'

// const imageUrl = 'https://web.whatsapp.com/img/native-desktop-hero_a22b846aefcd2de817624e95873b2064.png';

const Container = styled(Box)`
    background-color:#f8f9fa;
    padding: 30px 0;
    text-align: center;
    height:100vh;
`;

const Wrapper = styled(Box)`
    padding:0 200px
`;

const Img = styled("img")({
    width: 300,
    marginTop: 100,
    height: 300
});

const Title = styled(Typography)`
    font-size:32px;
    margin:25px 0 10px 0;
    font-family:inherit;
    font-weight:300;
    color:#41525d;

`;

const SubTitle = styled(Typography)`
    font-size:14px;
    color:#667781;
    font-weight:400,
    font-family:inherit;
`;

function EmptyChat() {
    return (
        <Container>
            <Wrapper>
                <Img src={qrCodeImage} alt="qrCodeImage" />

                <Title>Download WhatsApp for Windows </Title>
                <SubTitle>Make calls, share your screen and get a faster experience when you download the Windows app.</SubTitle>
            </Wrapper>
        </Container>
    );
}

export default EmptyChat;