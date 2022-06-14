import React,{useEffect} from 'react'

//Sections
import Navbar from './Navbar'
import Banner from './Banner';
import { Box, styled } from '@mui/system';
import { getProducts } from '../../redux/actions/productActions';
import {useDispatch,useSelector} from 'react-redux'
const BoxComp = styled(Box)`
padding: 10px;
background:#f2f2f2
`
const Home = () => {
    useSelector(state =>state.getProducts())
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProducts());
    },[dispatch]);
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
