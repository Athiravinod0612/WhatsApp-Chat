import React, { useState } from 'react';

import { Box } from "@mui/material";
// import Header from "./Header";
import { useContext } from "react";
import { AccountContext } from "../../Context/AccountProvider";
import styled from "@emotion/styled";
// import MoreVertIcon from '@mui/icons-material/MoreVert';
import ChatIcon from '@mui/icons-material/Chat';
import HeaderMenu from './HeaderMenu';
import InfoDrawer from '../../Drawer/InfoDrawer';

const Component = styled(Box)`
    height:44px;
    background: #ededed;
    padding:8px 16px;
    display: flex;
    align-items: center;
`;

const Img = styled("img")({
    height: 40,
    width: 40,
    borderRadius: "50%",
})

const Warpper = styled(Box)`
    margin-left:auto;
    display:flex;
    &>*{
         margin-left:2px;
         padding:8px;
         color:#000
    }&:first-child{
         font-size:22px;
         margin-right:8px;
         margin-top:3px;
    }
`;


function Header() {

    const [openDrawer, setOpenDrawer] = useState(false);

    const toggleDrawer = () => {
        setOpenDrawer(true)
    }

    const { account } = useContext(AccountContext);
    return (
        <div>
            <Component>
                <Img src={account.picture} alt="Dp" onClick={toggleDrawer()} />
                <Warpper>
                    <ChatIcon />
                    <HeaderMenu />


                </Warpper>
            </Component>
            <InfoDrawer open={openDrawer} setopen={setOpenDrawer} />
        </div>
    );


}

export default Header;





// const MenuBox = () => {
//     const { account } = useContext(AccountContext)
//     console.log("account:" + account)
//     return (
//         <div>
//             <Box >
//                 <img src={account.picture} alt="Dp" />
//             </Box>
//         </div>
//     )
// }
