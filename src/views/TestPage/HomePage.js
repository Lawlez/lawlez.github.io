import React from 'react'

import { Paper } from '@material-ui/core'
// Sections for this page
import IntroSection from './Sections/IntroSection.js'
import WorkSection from './Sections/WorkSection.js'
import Examples from './Sections/Examples.js'
import Readme from './Sections/Readme.js'

export default function HomePage() {
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
