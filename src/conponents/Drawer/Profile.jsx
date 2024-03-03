import React, { useContext } from 'react';
import { AccountContext } from '../Context/AccountProvider';
import { Box, Typography } from '@mui/material';
import styled from '@emotion/styled';


function Profile() {

    const ImgContainer = styled(Box)`
    diaplay: flex;
    justify-content: center;
    `;

    const Image = styled("img")({
        width: 200,
        height: 200,
        borderRadius: "100%",
        // justifyContent: "center"
        margin: "10% 25%"
    })
    const ContainerWrapper = styled(Box)({
        backgroundColor: "#ffffff",
        padding: "2% 5%",
        boxShadow: " 0 1px 3px rgba(0, 0, 0, 0.08)",
    })

    const WrapperHead = styled(Typography)`
        font-size:13px;
        color:#009688;
        padding:3% 0%
    `;

    const WrapperName = styled(Typography)`
        color:#4A4A4A;
    `;

    const DescriptionContainer = styled(Box)`
    padding:15px 20px 28px 30px;
    & > p {
        font-size:13px;
        color:#8696a0;
    }
    `;




    const { account } = useContext(AccountContext)
    console.log(account)
    return (
        <div>
            <ImgContainer>
                <Image src={account.picture} alt='Dp' />
            </ImgContainer>

            <ContainerWrapper>
                <WrapperHead>Your Name</WrapperHead>
                <WrapperName>{account.name}</WrapperName>
            </ContainerWrapper>
            <DescriptionContainer>
                <Typography>This is not your username or pin. This name will be visible to your WhatsApp contacts.</Typography>
            </DescriptionContainer>
            <ContainerWrapper>
                <WrapperHead>About</WrapperHead>
                <WrapperName>live! love! laugh!</WrapperName>

            </ContainerWrapper>

        </div>
    );
}

export default Profile;
