import React, { useState } from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import styled from '@emotion/styled';

function HeaderMenu({ setOpenDrawer }) {
    const [open, setOpen] = useState(null)

    const handleClose = () => {
        setOpen(null);
    }

    const handdleClick = (e) => {
        setOpen(e.currentTarget);
    }

    const MenuOption = styled(MenuItem)`
    font-size:14px;
    padding: 15px 60px 5px 24px;
    // color:#4A4A4A;
`;

    return (
        <div>
            <MoreVertIcon onClick={handdleClick} />
            <Menu
                anchorEl={open}
                keyMounted
                open={open}
                onClose={handleClose}
                getContentAnchorE1={null}
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "center"
                }}
                transformOrigin={{
                    vertical: "top",
                    horizontal: "right"
                }}
            >
                <MenuOption onClick={handleClose}>New group</MenuOption>
                <MenuOption onClick={handleClose}>Archived</MenuOption>
                <MenuOption onClick={handleClose}>Starred message</MenuOption>
                <MenuOption onClick={handleClose}>Settings</MenuOption>
                <MenuOption onClick={() => { handleClose(); setOpenDrawer(true) }}>Profile</MenuOption>
                <MenuOption onClick={handleClose}>Log out</MenuOption>
            </Menu>
        </div >
    );
}

export default HeaderMenu;
