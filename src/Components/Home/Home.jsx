import React from 'react'

//Sections
import Navbar from './Navbar'
import Banner from './Banner';
import { Box, styled } from '@mui/system';

const BoxComp = styled(Box)`
padding: 10px;
background:#f2f2f2
`
const Home = () => {
    return (
        <>
            <Navbar />
            <BoxComp>
            <Banner/>

            </BoxComp>
        </>
    )
}

export default Home
