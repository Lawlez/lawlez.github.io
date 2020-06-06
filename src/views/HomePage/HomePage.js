/* eslint-disable */
import React from 'react'
// nodejs library that concatenates classes
import classNames from 'classnames'
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'

// @material-ui/icons
import Paint from '@material-ui/icons/FormatPaint'
// core components

import styles from 'assets/jss/material-kit-react/views/landingPage.js'

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
                    <IntroSection />
                    <WorkSection />
                    <Examples />
                    <Readme />
                </div>
            </div>
        </div>
    )
}
