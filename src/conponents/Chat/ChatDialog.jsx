import { Dialog, Box, styled } from '@mui/material';
import React from 'react';
import MenuBox from './Menu/MenuBox';
import EmptyChat from './Chat/EmptyChat';
import ChatBox from './Chat/ChatBox';
// import MenuBox from './Menu/menu';
import { AccountContext } from '../Context/AccountProvider';
import { useContext } from 'react';


const dialogstyle = {
    height: "95%",
    margin: "20px",
    width: "100%",
    maxWidth: "100%",
    maxHeight: "100%",
    boxShadow: "none",
    overflow: "hidden",
    backgroundColor: "none",
    borderRadius: 0,
}

const Component = styled(Box)`
        display:flex;
        `;

const LeftComponent = styled(Box)`
//     mini-width:450px
     width: 450px;
`;
const RightComponent = styled(Box)`
    width:73%;
    mini-width:300px;
    height100%;
    border-left: 1px solid rgba(0, 0, 0, 0.14)
`;



function ChatDialog() {

    const { person } = useContext(AccountContext)

    return (
        <>
            <Dialog open={true}
                PaperProps={{ sx: dialogstyle }}
                hideBackdrop={true}
                maxWidth={"md"} >
                <Component>
                    <LeftComponent>
                        <MenuBox />
                    </LeftComponent>
                    <RightComponent>

                        {Object.keys(person).length ? <ChatBox /> : <EmptyChat />}
                    </RightComponent>
                </Component>
            </Dialog>
        </>
    );
}

export default ChatDialog;
