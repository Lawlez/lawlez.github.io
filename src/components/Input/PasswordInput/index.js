import React from 'react'
import {
    FormHelperText as MuiFormHelperText,
    InputLabel as MuiInputLabel,
    FormControl as MuiFormControl,
    OutlinedInput as MuiOutlinedInput,
    InputAdornment as MuiInputAdornment
} from '@material-ui/core'
import { VisibilityIcon, VisibilityOffIcon } from '@tim/icons'
import { IconButton } from '@tim/components'
import withTranslation from '@tim/functional/withTranslation'
import withShowPass from '@tim/functional/withShowPass'
import PropTypes from 'prop-types'
import useStyles from './index.styles'
import clsx from 'clsx'
import { compose } from '@tim/functional'
import { useFormContext } from '@tim/functional/Form'

import jp from 'jsonpath'

const PasswordInput = ({
    type,
    label,
    inputRef,
    name,
    toggleShowPass,
    handleMouseDownPassword,
    helperText,
    showPass,
    value,
    id,
    ...restProps
}) => {
    const classes = useStyles()

    const myRef = React.useRef()
    // Hack damit die Cursor Position richtig gesetzt wird beim
    // ShowPass Switch.
    // @todo: Diese Komponente benötigt unbedingt ein Refactoring
    React.useEffect(() => {
        myRef.current.selectionStart = myRef.current.value.length
    }, [showPass])

    const { register, setValue, errors } = useFormContext()

    React.useEffect(() => {
        register(name, { required: 'Password is required!' })
    }, [])

    const query = jp.query(errors, name)
    const error = query.length > 0 ? query[0] : false

    return (
        <MuiFormControl
            {...restProps}
            className={clsx(classes.margin, classes.textField)}
            variant="outlined"
            size="small"
            required
            error={!!error}
        >
            <MuiInputLabel htmlFor="outlined-adornment-password">
                {label}
            </MuiInputLabel>
            <MuiOutlinedInput
                {...restProps}
                className={classes.passwordInput}
                name={name}
                inputRef={e => {
                    myRef.current = e
                }}
                labelWidth={100}
                id={id ? id : 'standard-adornment-password'}
                type={showPass ? 'text' : 'password'}
                onChange={e => {
                    setValue(name, e.target.value, true)
                }}
                endAdornment={
                    <MuiInputAdornment
                        className={classes.adornment}
                        position="end"
                    >
                        <IconButton
                            name="toggle-PW-visibility"
                            aria-label="toggle password visibility"
                            onClick={() => {
                                toggleShowPass()
                            }}
                            onMouseDown={handleMouseDownPassword}
                            label={
                                !showPass ? 'show password' : 'hide password'
                            }
                        >
                            {!showPass ? (
                                <VisibilityIcon />
                            ) : (
                                <VisibilityOffIcon />
                            )}
                        </IconButton>
                    </MuiInputAdornment>
                }
            />
            <MuiFormHelperText>
                {error?.message ? error.message : helperText}
            </MuiFormHelperText>
        </MuiFormControl>
    )
}

PasswordInput.propTypes = {
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    value: PropTypes.string,
    variant: PropTypes.oneOf(['standard', 'outlined', 'filled']),
    name: PropTypes.string.isRequired,
    inputRef: PropTypes.func,
    type: PropTypes.oneOf(['password'])
}

PasswordInput.defaultProps = {
    value: '',
    type: 'password'
}
PasswordInput.displayName = 'PasswordInput'

//Vanilla export for storybook
export const PasswordInputComponent = PasswordInput
//standard export
export default compose(
    withTranslation,
    withShowPass
)(PasswordInput)
