import React, { useContext, useState } from 'react';
import { useEffect } from 'react';
import { getUsers } from '../../../Service/Api';
import { Box, Divider } from '@mui/material';
import Conversation from './Conversation';
import { AccountContext } from '../../Context/AccountProvider';
import styled from '@emotion/styled';


const Component = styled(Box)({
    height: '81vh',
    overflow: 'overlay',
})

const StyledDivider = styled(Divider)({
    margin: ' 0 0 0 70px',
    backgroundColor: '#e9edef',
    opacity: .6,
})


function Conversations() {
    const { account } = useContext(AccountContext)

    const [users, setUsers] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            let response = await getUsers();
            setUsers(response)
        }
        fetchData();
    }, [])



    return (
        <Component>
            {
                users && users.map((user) => (
                    user.sub !== account.sub &&
                    <>
                        <Conversation user={user} />
                        <StyledDivider />
                    </>
                ))
            }
        </Component>

    );
}

export default Conversations;
