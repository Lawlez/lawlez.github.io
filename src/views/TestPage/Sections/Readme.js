import React from 'react'
import ReactMarkdown from 'react-markdown'
// @material-ui/core components
// @material-ui/icons

import markdownDefault from '../../../../README.md'

export const Readme = () => {
    return <ReactMarkdown source={markdownDefault} />
}
export default Readme
