import { Box, Button, Typography, styled } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import React, { useState, useContext } from 'react'
import { DataContext } from '../../context/DataProvider';
//Components
import LoginDialog from '../Login/LoginDialog';
import Profile from './Profile';

// overwrite
const Wrapper = styled(Box)(({ theme }) => ({
    display: "flex",
    margin: "0 3% 0 5%",

    "&>button,&>p,&>div": {
        marginRight: "40px",
        fontSize: "16px",
        alignItems: "center"
    },
    [theme.breakpoints.down('md')]: {
        display: 'block'
    }
}))

const BoxContain = styled(Box)(({ theme }) => ({
    display: "flex",
    [theme.breakpoints.down('md')]: {
        display: 'block'
    }

}))

const LoginButton = styled(Button)`
color:#2874f0;
background:#fff;
text-transform:none;
padding:5px 40px;
border-radius:2px;
box-shadow:none;
font-weight:600;
height:32px
`
const CustomButton = () => {
    const [open, setOpen] = useState(false);
    const { account, setAccount } = useContext(DataContext);
    const openDialog = () => {
        setOpen(true);
    }
    return (
        <Wrapper>
            {
                account ? <Profile account={account} setAccount={setAccount} /> :
                    <LoginButton onClick={() => openDialog()} variant='contained'>Login</LoginButton>
            }
            <Typography style={{ marginTop: 3, width: 140 }}>Become a Seller</Typography>
            <Typography style={{ marginTop: 3 }}>More</Typography>

            <BoxContain>
                <ShoppingCartIcon />
                <Typography>cart</Typography>
            </BoxContain>
            <LoginDialog open={open} setOpen={setOpen} />
        </Wrapper>
    )
}

export default CustomButton
