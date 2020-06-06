import React from 'react'
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'
import {
    InputAdornment,
    Icon,
    Button,
    Card,
    TextField,
    Grid,
    CardActionArea,
    CardContent,
    Typography,
    CardActions,
    CardMedia,
    Container,
    Paper
} from '@material-ui/core'
// @material-ui/icons
import Email from '@material-ui/icons/Email'
import People from '@material-ui/icons/People'
// core components

import image from 'assets/img/bg7.jpg'

const useStyles = makeStyles(styles)

export const LoginPage = props => {
    const classes = useStyles()
    return (
        <>
            <Paper variant="outlined">
                <Container>
                    <Grid container justify="center">
                        <Grid item xs={12} sm={12} md={4}>
                            howdy
                        </Grid>
                    </Grid>
                </Container>
            </Paper>
        </>
    )
}

export default LoginPage
