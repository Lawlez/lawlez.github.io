import React from 'react'
import useStyles from './index.styles'
import PropTypes from 'prop-types'
import { Button as MuiButton } from '@material-ui/core'

const Button = ({ color, label, variant, ...restProps }) => {
    const classes = useStyles()
    return (
        <MuiButton
            className={classes.Button}
            color={color}
            variant={variant}
            {...restProps}
        >
            {label}
        </MuiButton>
    )
}

Button.propTypes = {
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    variant: PropTypes.oneOf(['text', 'outlined', 'contained']),
    name: PropTypes.string.isRequired,
    inputRef: PropTypes.func,
    color: PropTypes.oneOf(['primary', 'secondary', 'inherit'])
}

Button.displayName = 'Button'

//Vanilla Export used in Storybook
export const ButtonComponent = Button
//standard component export
export default Button
