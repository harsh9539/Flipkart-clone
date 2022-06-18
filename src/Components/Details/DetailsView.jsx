import { Box, Grid, styled, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getProductDetails } from '../../redux/actions/productActions'
import ActionItem from './ActionItem'


const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'

const BoxComp = styled(Box)`
background:#f2f2f2;
`

const GridContain = styled(Grid)`
background:#ffffff;
display:flex;

`

const RightContainer = styled(Grid)`
margin-top:50px
`


const DetailsView = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const { loading, product } = useSelector(state => state.getProductDetails);


    useEffect(() => {
        if (product && id !== product.id) {
            dispatch(getProductDetails(id))
        }
    }, [dispatch, id, loading, product])
    return (
        <BoxComp>
            {
                product&&Object.keys(product).length&&
                <GridContain  container>
                    <Grid item lg={4} md={4} sm={8} xs={12} >
                <ActionItem product={product}/>
                    </Grid>
                    <RightContainer item lg={8} md={8} sm={8} xs={12}>
                        <Typography>{product.title.longTitle}</Typography>
                        <Typography style={{marginTop:5,color:'#878787',fontSize:14}}>8 Ratings and 1 reviews
                        <Box component='span'><img src={fassured} style={{width:77,marginLeft:20}} alt='img'/></Box>
                        </Typography>
                        <Typography>
                            <Box component='span'style={{fontSize:28}} >₹{product.price.cost}</Box>&nbsp;
                            <Box component='span' style={{color:'#878787'}}><strike>₹{product.price.mrp}</strike></Box>&nbsp;
                            <Box component='span' style={{color:'#388E3C'}} >{product.price.discount}</Box>

                        </Typography>
                    </RightContainer>
                </GridContain>
            }
        </BoxComp>
    )
}

export default DetailsView
