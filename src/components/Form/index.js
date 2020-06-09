import React from 'react'
import {
    useForm as useHookForm,
    FormContext as OriginalFormContext, useFormContext,
} from 'react-hook-form'
import { DevTool } from 'react-hook-form-devtools'

import jp from 'jsonpath'
export {
    useFormContext, Controller, ErrorMessage, useForm
} from 'react-hook-form'

export const Form = ({
    onSubmit,
    onBlurConnector,
    formOptions,
    errorJumper,
    debug,
    children,
}) => {
    const hookFormProps = useHookForm(formOptions)

    const customOnBlur = async e => {
        const name = e[0].target.name

        if (!name) {
            return
        }
        const isValid = await hookFormProps.triggerValidation(name)

        if (isValid && onBlurConnector) {
            const dataNames = Object.keys(hookFormProps.getValues())
            const nestedData = hookFormProps.getValues({ nest: true })

            const errorFields = jp.query(
                hookFormProps.control.errorsRef.current,
                '$..ref.name',
            )

            for (let i = 0; i < dataNames.length; i++) {
                jp.apply(nestedData, `$.${dataNames[i]}`, value => {
                    return {
                        value,
                        isValid: true,
                    }
                })
            }

            for (let i = 0; i < errorFields.length; i++) {
                jp.apply(nestedData, errorFields[i], value => {
                    value.isValid = false

                    return value
                })
            }

            onBlurConnector(nestedData)
        }
    }
    return (
        <OriginalFormContext
            {...hookFormProps}
            errorJumper={errorJumper}
            customOnBlur={customOnBlur}
        >
            <FormContent
                handleSubmit={hookFormProps.handleSubmit}
                onSubmit={onSubmit}
            >
                {children}
                {debug && process.env.NODE_ENV == 'development' && (
                    <DevTool control={hookFormProps.control} />
                )}
            </FormContent>
        </OriginalFormContext>
    )
}

const FormContent = React.memo(({
    handleSubmit, children, onSubmit,
}) => {
    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            noValidate
        >
            {children}
        </form>
    )
})

export const FormContext = ({ children }) => {
    const data = useFormContext()
    return children({ ...data })
}
