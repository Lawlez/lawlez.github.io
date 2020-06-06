import React from 'react'
// nodejs library that concatenates classes
import classNames from 'classnames'
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'

// @material-ui/icons
import Paint from '@material-ui/icons/FormatPaint'
// core components

import { Paper, Container } from '@material-ui/core'
// Sections for this page
import IntroSection from './Sections/IntroSection.js'
import WorkSection from './Sections/WorkSection.js'
import Examples from './Sections/Examples.js'
import Readme from './Sections/Readme.js'

export default function HomePage(props) {
    return (
        <div>
            <div>
                <div>
                    <Paper elevation={3}>
                        <IntroSection />
                    </Paper>
                    <Paper elevation={3}>
                        <WorkSection />
                    </Paper>
                    <Paper elevation={3}>
                        <Examples />
                    </Paper>
                    <Paper elevation={3}>
                        <Readme />
                    </Paper>
                </div>
            </div>
        </div>
    )
}
