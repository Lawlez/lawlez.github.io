import React from 'react'
import PropTypes from 'prop-types'

import withTranslation from '@tim/functional/withTranslation'
import withControlledDateInput, {
    withControlledDateInputRange
} from '@tim/functional/withControlledDateInput'
import withMoment from '@tim/functional/withMoment'
import { compose } from '@tim/functional'

import {
    FormControl as MuiFormControl,
    FormLabel as MuiFormLabel,
    FormHelperText as MuiFormHelperText
} from '@material-ui/core'

import useStyles from './index.styles'

const VanillaDateInput = ({
    onChange,
    value,
    error,
    helperText,
    variant,
    format,
    onBlur,
    name,
    triggerValidation,
    mode,
    onClose,
    ...restProps
}) => {
    const classes = useStyles()

    let PickerComponent

    // @todo: In Zukunft sollten diese nachgeladen werden. Da aktuell alle Picker gleichzeitig geladen werden
    switch (mode) {
        case 'date':
            PickerComponent = require('@material-ui/pickers').KeyboardDatePicker
            break
        case 'datetime':
            PickerComponent = require('@material-ui/pickers')
                .KeyboardDateTimePicker
            break

        case 'time':
            PickerComponent = require('@material-ui/pickers').KeyboardTimePicker
            break
    }

    // @todo: sobald DatePicker v4 vollständig released upgraden, damit ref übergeben
    // werden kann. Wird benötigt für den withFormErrorJumper:
    //
    // https://stackoverflow.com/questions/60750718/how-to-access-ref-or-focus-to-an-material-ui-keyboarddatepicker
    return (
        <PickerComponent
            {...restProps}
            className={classes.dateInputField}
            variant="inline"
            value={value}
            onChange={e => {
                onClose && onClose()
                onChange(e)
                if (triggerValidation) {
                    triggerValidation(name)
                }
            }}
            helperText={error ? error.message : helperText}
            error={!!error}
            inputVariant={variant}
            format={format}
            onClose={() => {
                onClose && onClose()
                const e = {
                    target: {
                        name
                    }
                }
                onBlur(e)
            }}
            onBlur={() => {
                const e = {
                    target: {
                        name
                    }
                }
                onBlur(e)
            }}
        />
    )
}

VanillaDateInput.defaultProps = {
    mode: 'date'
}

VanillaDateInput.propTypes = {
    onChange: PropTypes.func,
    value: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    error: PropTypes.object,
    helperText: PropTypes.string,
    variant: PropTypes.string,
    format: PropTypes.string,
    onBlur: PropTypes.func,
    name: PropTypes.string.isRequired,
    triggerValidation: PropTypes.func,
    mode: PropTypes.oneOf(['date', 'datetime', 'time']),
    restProps: PropTypes.node
}

const VanillaDateInputGroup = ({
    error,
    label,
    helperText,
    children,
    value,
    onChange,
    alignment,
    ...restProps
}) => {
    return (
        <MuiFormControl error={!!error}>
            <MuiFormLabel component="legend">{label}</MuiFormLabel>
            <div
                style={{
                    display: 'flex',
                    flexDirection: alignment !== 'horizontal' ? 'column' : 'row'
                }}
            >
                {React.Children.map(children, (child, index) => {
                    return React.cloneElement(
                        child,
                        {
                            ...restProps,
                            onChange: e => {
                                const newE = {
                                    ...value,
                                    [index]: e
                                }

                                onChange(newE)
                            },
                            value: value && value[index]
                        },
                        child.props.children
                    )
                })}
            </div>
            <MuiFormHelperText>
                {error?.message ? error.message : helperText}
            </MuiFormHelperText>
        </MuiFormControl>
    )
}

VanillaDateInputGroup.propTypes = {
    error: PropTypes.object,
    label: PropTypes.string,
    helperText: PropTypes.string,
    value: PropTypes.object,
    onChange: PropTypes.func,
    alignment: PropTypes.oneOf(['horizontal', 'vertical']),
    restProps: PropTypes.node
}

export const DateInputComponent = VanillaDateInput
export const DateInputGroupComponent = VanillaDateInputGroup

export const DateInput = withTranslation(VanillaDateInput)
export const DateInputGroup = withTranslation(VanillaDateInputGroup)

const ControlledDateInput = compose(
    withMoment,
    withControlledDateInput
)(DateInput)

export const ControlledDateInputRange = compose(
    withMoment,
    withControlledDateInputRange
)(DateInputGroup)

export default ControlledDateInput
