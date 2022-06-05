import { InputBase,Box, styled } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import React from 'react'

// overwriting
const SearchContainer = styled(Box)`
background:#fff;
width:35%;
border-radius:2px;
margin-left:10px;
display:flex
`
const InputSearchBase = styled(InputBase)`
padding-left:20px;
width:100%;
font-size:unset;
`
const SearchIconWrapper = styled(Box)`
color:blue;
padding:3px;
dispaly:flex;
`
const Search = () => {
    return (
        <SearchContainer>
            <InputSearchBase
            placeholder='Search for Products,brands'
            />
            <SearchIconWrapper><SearchIcon/></SearchIconWrapper>
        </SearchContainer>
    )
}

export default Search
