import styled from '@emotion/styled';
import MoreVert from '@mui/icons-material/MoreVert';
import Search from '@mui/icons-material/Search';
import { Box, Typography } from '@mui/material';


const Header = styled(Box)`
    height: 44px;
    background:#ededed;
    padding:8px 16px;
    display:flex;
    align-items: center;
`;

const Img = styled('img')({
    height: 40,
    width: 40,
    objectFit: 'cover',
    borderRadius: '50%'
});

const Name = styled(Typography)`
    margin-left:12px !important;
`;
const Status = styled(Typography)`
    margin-left:12px !important;
    font-size:12px;
    color: rgb(0, 0, 0, 0.6);
`;

const RightComponent = styled(Box)`
    margin-left: auto;
    & > svg {
        padding: 8px;
        font-size:20px;
        color:#000;
    }
`;


function ChatHeader({ user }) {



    return (
        <Header>
            <Img src={user.picture} alt='DP' />
            <Box>
                <Name>{user.name}</Name>
                <Status>Offline</Status>
            </Box>
            <RightComponent>
                <Search />
                <MoreVert />
            </RightComponent>
        </Header>
    );
}

export default ChatHeader;
