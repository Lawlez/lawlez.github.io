import React from 'react'
import Button from '../Button'
import IconButton from '../IconButton'
import withFileReader from '@tim/functional/withFileReader'
import withTranslation from '@tim/functional/withTranslation'
import withControlledUploadButton from '@tim/functional/withControlledUploadButton'
import withFormErrorJumper from '@tim/functional/withFormErrorJumper'
import { compose } from '@tim/functional'
import useStyles from './index.styles'
import {
    FormControl as MuiFormControl,
    FormHelperText as MuiFormHelperText
} from '@material-ui/core'
import { mdiCloseCircle, MDCIcon } from '@tim/icons'

let UploadButton = ({
    name,
    accept,
    multiple,
    files,
    removeFile,
    error,
    helperText,
    inputRef,
    maxFileSize,
    ...restProps
}) => {
    const classes = useStyles()
    return (
        <MuiFormControl className={classes.root} error={error}>
            <input
                type="file"
                id={name}
                name={name}
                style={{ display: 'none' }}
                accept={accept}
                multiple={multiple}
                ref={inputRef}
            />
            <label className={classes.uploadLabel} htmlFor={name}>
                <Button {...restProps} component="span" />
            </label>
            <MuiFormHelperText>
                {error && error.message ? error.message : helperText}
            </MuiFormHelperText>
            {files.map(file => (
                <span>
                    {JSON.stringify(
                        // @TODO maxFileNameLength als prop angeben
                        file.name.length > 23
                            ? file.name.substr(0, 20) +
                                  '.' +
                                  file.type.replace(/\w+\//, '')
                            : file.name
                    )}
                    <IconButton
                        label={`remove ${file.name.substr(0, 20)}...`}
                        onClick={() => removeFile(file.id)}
                    >
                        <MDCIcon
                            path={mdiCloseCircle}
                            title="remove file"
                            size={1}
                            horizontal
                            rotate={180}
                            vertical
                            color={'rgba(0,0,0,0.54)'}
                        ></MDCIcon>
                    </IconButton>
                </span>
            ))}
        </MuiFormControl>
    )
}
//VanillaExport used in Storybook
export const UploadButtonComponent = UploadButton
//Uncontrolled standard export
UploadButton = compose(withTranslation)(UploadButton)
export default UploadButton
//Controlled Export
export const ControlledUploadButton = compose(
    withControlledUploadButton,
    withFormErrorJumper,
    withFileReader
)(UploadButton)
