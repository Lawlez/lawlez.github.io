import React from 'react'
import PropTypes from 'prop-types'
import withAdornment from '@tim/functional/withAdornment'

const AdornmentInput = ({ InputComponent, ...restProps }) => {
    const AndornedComponent = withAdornment(InputComponent)(restProps)
    return AndornedComponent
}

AdornmentInput.propTypes = {
    adornmentPos: PropTypes.string.isRequired,
    adornmentValue: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
        .isRequired,
    InputComponent: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    variant: PropTypes.oneOf(['standard', 'outlined', 'filled']).isRequired,
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
}

AdornmentInput.displayName = 'AdornmentInput'
//standard export
export default AdornmentInput
