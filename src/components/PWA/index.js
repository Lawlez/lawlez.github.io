//todo needs work
//not for velux tho
import React, { useState, useEffect } from 'react'

import { FormattedMessage } from 'react-intl'
import { IconButton } from '@material-ui/core'

import InstallIcon from '@material-ui/icons/GetApp'

const PWA = props => {
    const [deferredPrompt, setDeferredPrompt] = useState(undefined)
    const [installed, setInstalled] = useState(false)
    useEffect(() => {
        const installEvent = event => {
            event.preventDefault()
            // Stash the event so it can be triggered later.
            setDeferredPrompt(event)
            // Remove the 'hidden' class from the install button container
            //divInstall.classList.toggle('hidden', false)
        }

        const isInstalled = event => {
            setInstalled(true)
        }

        window.addEventListener('beforeinstallprompt', installEvent)
        window.addEventListener('appInstalled', isInstalled)
        return () => {
            window.removeEventListener('beforeinstallprompt', installEvent)
            window.removeEventListener('appInstalled', isInstalled)
        }
    }, [])

    const installPWA = () => {
        if (deferredPrompt) {
            deferredPrompt.prompt()
        }
    }

    return (
        <FormattedMessage id="app.appbar.installPWA">
            {txt => (
                <IconButton
                    label={txt}
                    aria-label={txt}
                    color="inherit"
                    onClick={() => installPWA()}
                >
                    <InstallIcon />
                </IconButton>
            )}
        </FormattedMessage>
    )
}

export default PWA
