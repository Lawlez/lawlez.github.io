import React, { useState } from 'react'

export const withShowPass = InputComponent => restProps => {
    const [showPass, setShowPass] = useState(false)

    const handleMouseDownPassword = event => {
        event.preventDefault()
    }
    return (
        <InputComponent
            {...restProps}
            handleMouseDownPassword={handleMouseDownPassword}
            showPass={showPass}
            toggleShowPass={() => setShowPass(!showPass)}
        />
    )
}
export default withShowPass
