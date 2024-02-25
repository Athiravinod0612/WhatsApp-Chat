import { Drawer } from '@mui/material';
import React from 'react';


const drawerStyle = {
    left: 20,
}

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
            heloo
        </Drawer>
    );
}

export default InfoDrawer;
