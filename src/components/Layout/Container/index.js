import React from 'react'
import { Container as MuiContainer } from '@material-ui/core'
import useStyles from './index.styles'

const Container = props => {
    return <MuiContainer {...props} />
}
//standard Export
export const InfoBox = props => {
    const classes = useStyles()
    return <MuiContainer className={classes.infoBox} {...props} />
}

//standard Export
export default Container
