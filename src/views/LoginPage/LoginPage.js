import React from 'react'
// @material-ui/core components
import { Grid, Container, Paper } from '@material-ui/core'
// @material-ui/icons
// core components

export const LoginPage = () => {
    return (
        <>
            <Paper variant="outlined">
                <Container>
                    <Grid container justify="center">
                        <Grid item xs={12} sm={12} md={4}>
                            <p>howdy</p>
                        </Grid>
                    </Grid>
                </Container>
            </Paper>
        </>
    )
}

export default LoginPage
