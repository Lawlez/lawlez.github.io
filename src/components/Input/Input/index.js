import React, { useEffect, useState } from 'react'
import { TextField as MuiTextField } from '@material-ui/core'
import PropTypes from 'prop-types'
import useStyles from './index.styles'
import withTranslation from '@tim/functional/withTranslation'
import withTextMask from '@tim/functional/withTextMask'
import withFormErrorJumper from '@tim/functional/withFormErrorJumper'
import { compose } from '@tim/functional'
import { Controller, useFormContext } from '@tim/functional/Form'

import jp from 'jsonpath'

const VanillaInput = ({
    value,
    label,
    InputProps,
    name,
    error,
    helperText,
    align,
    inputProps,
    ...restProps
}) => {
    const classes = useStyles()
    const [stateValue, setStateValue] = useState(value)
    useEffect(() => {
        setStateValue(value)
    }, [value])

    if (align === 'right' || align === 'center') {
        inputProps = {
            ...inputProps,
            style: {
                ...inputProps?.style,
                textAlign: align
            }
        }
    }

    return (
        <MuiTextField
            {...restProps}
            id={error ? 'error' : ''}
            className={classes.inputField}
            label={label}
            value={stateValue}
            InputProps={InputProps}
            inputProps={inputProps}
            name={name}
            helperText={error?.message ? error.message : helperText}
            error={!!error}
        />
    )
}

VanillaInput.propTypes = {
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    variant: PropTypes.oneOf(['standard', 'outlined', 'filled']).isRequired,
    name: PropTypes.string.isRequired,
    inputRef: PropTypes.func,
    type: PropTypes.oneOf([
        'text',
        'password',
        'number',
        'email',
        'tel',
        'search',
        'submit',
        'url',
        'hidden'
    ]).isRequired,
    /** If true, a textarea element will be rendered. */
    multiline: PropTypes.bool,
    /** This prop helps users to fill forms faster, especially on mobile devices. The name can be confusing, as it's more like an autofill. */
    autoComplete: PropTypes.bool,
    autoFocus: PropTypes.bool,
    color: PropTypes.oneOf(['primary', 'secondary']).isRequired,
    disabled: PropTypes.bool,
    disableUnderline: PropTypes.bool,
    /** if set error state will be rendered */
    error: PropTypes.object,
    //todo: required when we have idtagger
    id: PropTypes.string,
    fullwidth: PropTypes.bool,
    /** If dense, will adjust vertical spacing. This is normally obtained via context from FormControl. */
    margin: PropTypes.oneOf(['dense', 'none']),
    placeholder: PropTypes.string,
    rows: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    rowsMax: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    readOnly: PropTypes.bool,
    required: PropTypes.bool,
    align: PropTypes.oneOf(['left', 'center', 'right'])
}

VanillaInput.defaultProps = {
    type: 'text',
    align: 'left'
}

const ControlledInput = ({ name, children, rules, onChange, ...restProps }) => {
    const { control, customOnBlur, errors } = useFormContext()

    const query = jp.query(errors, name)
    const error = query.length > 0 ? query[0] : false

    return (
        <Controller
            as={<Input {...restProps} error={error} />}
            control={control}
            name={name}
            rules={rules}
            onBlur={customOnBlur}
            onChange={([value]) => {
                if (onChange) {
                    onChange(value)
                }
                return value
            }}
        />
    )
}

//Vanilla Export for storybook
export const InputComponent = VanillaInput
//Standard export
export const Input = compose(
    withTranslation,
    withTextMask
)(VanillaInput)

// controlled export
export default withFormErrorJumper(ControlledInput)
