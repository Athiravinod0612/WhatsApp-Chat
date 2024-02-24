import { Box } from '@mui/material';
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import styled from '@emotion/styled';

const Component = styled(Box)`
    background-color: #ffff;
    height:45px;
    border-bottom: 1px solid #F2F2F2;
    align-item: center;

    `;

const Warpper = styled(Box)`
    background-color:#f0f2f5;
    position :relative;
    margin:4px 10px;
    width:95%;
    border-radius:10px;
    height: 40px

`;

const Icon = styled(Box)`
    position : absolute;
    height:100%;
    padding:8px;
    color: #919191;
`;

const InputField = styled(InputBase)`
    width:90%;
    padding-left:56px;
    padding-top:5px
`;


function Search() {
    return (
        <Component>
            <Warpper>
                <Icon>
                    <SearchIcon fontSize='small' />

                </Icon>
                <InputField placeholder='Search or Start new chat' />
            </Warpper>
        </Component>
    );
}

export default Search;
