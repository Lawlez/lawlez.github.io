import React from 'react'
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'

// @material-ui/icons

import PostRoute from './PostRoute.jsx'
import GetRoute from './GetRoute.jsx'

export const WorkSection = () => {
    return (
        <div>
            <PostRoute />

            <GetRoute />
        </div>
    )
}

export default WorkSection
