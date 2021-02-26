import { Container, Grid, makeStyles, Typography, Button } from '@material-ui/core'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import React from 'react'

const useStyles = makeStyles((theme) => ({
    root:{
        marginTop:theme.spacing(4)
    },
    btn:{
        '& .MUIButton-root:hover':{
            backgroundColor:"blue"

        },
        backgroundColor:"hsl(30, 100%, 60%)"



    },
}))

export default function ProductDetail() {
    const classes = useStyles()
    return (
        <Container className={classes.root}>
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <img alt="image_src" src="http://ae01.alicdn.com/kf/HTB17_GBXIvrK1Rjy0Feq6ATmVXaQ.jpg?width=800&height=800&hash=1600" 
                    style={{width:"300px"}}
                    />
                </Grid>
                <Grid item xs={4}>
                    <Typography variant="h5" color="textSecondary">
                        Amazing curtains

                    </Typography>
                    <Typography variant="subtitle1">
                        Brand:n/a (3 reviews)
                    </Typography>
                    <hr />
                    <Typography variant="h5" color="textSecondary">
                        <b>ksh:80</b>
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                        Sold by: <span style={{color:"#0080ff"}}>ANNIE'S ONLINE MALL</span>
                        <br />
                        you can choose from a variety of colors and sizes
                        <hr />
                    </Typography>

                    <Button variant="contained" 
                    className={classes.btn}
                    size="large" 
                    disableElevation
                    endIcon={<ShoppingCartIcon />}
                    >Add to Cart</Button>
                    <hr />
                    <Typography variant="subtitle2">
                        Categories:
                        <br />
                        Tags: 
                    </Typography>
                    <hr />
                    <div>
                    <FacebookIcon />
                    <InstagramIcon style={{color:"orange"}}/>
                    </div>
                    
                </Grid>
                <Grid item xs={4}>sadds</Grid>
            </Grid>
            
        </Container>
    )
}
