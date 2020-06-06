import React from 'react'
import ReactMarkdown from 'react-markdown'
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'
// @material-ui/icons

import markdownDefault from '../../../../README.md'

export const Readme = () => {
    return <ReactMarkdown source={markdownDefault} />
}
export default Readme
