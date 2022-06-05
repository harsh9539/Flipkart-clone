import { Box, Button, Typography,styled } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import React from 'react'

// overwrite
const Wrapper = styled(Box)
`
display:flex;
margin: 0 3% 0 5%;

&>button,&>p,&>div{
    margin-right:40px;
    font-size:16px;
    align-items:center;
}
`
const BoxContain = styled(Box)`
display:flex;
`
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
    return (
        <Wrapper>
            <LoginButton variant='contained'>Login</LoginButton>
            <Typography style={{marginTop:3,width:140}}>Become a Seller</Typography>
            <Typography style={{marginTop:3}}>More</Typography>

            <BoxContain>
                <ShoppingCartIcon/>
                <Typography>cart</Typography>
            </BoxContain>
        </Wrapper>
    )
}

export default CustomButton
