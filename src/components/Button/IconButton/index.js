import React from 'react'
import useStyles from './index.styles'
import { IconButton as MuiIconButton, Tooltip } from '@material-ui/core'
import PropTypes from 'prop-types'

const IconButton = ({ variant, label, color, children, ...restProps }) => {
    const classes = useStyles()

    return (
        <Tooltip className={classes.main} title={label}>
            <MuiIconButton
                variant={variant}
                label={label}
                aria-label={label}
                color={color}
                component="span"
                {...restProps}
            >
                {children}
            </MuiIconButton>
        </Tooltip>
    )
}

IconButton.propTypes = {
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    edge: PropTypes.oneOf(['start', 'end', false]),
    name: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    color: PropTypes.oneOf(['primary', 'secondary', 'default', 'inherit']),
    /** You can also choose to make the icon itself smaller by appending the icon with the fontSize=small prop*/
    size: PropTypes.oneOf(['small', 'medium'])
}
IconButton.displayName = 'IconButton'

//Vanilla Export used in Storybook
export const IconButtonComponent = IconButton
//standard component export
export default IconButton
