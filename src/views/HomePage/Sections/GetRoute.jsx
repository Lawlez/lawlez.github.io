/* eslint-disable */

import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { addUser } from '../../../store/actions/index'
import axios from 'axios'
// @material-ui/core components
import CircularProgress from '@material-ui/core/CircularProgress'

function WorkSection(props) {
    const { addUser, users } = props

    const [showLoading, setLoading] = useState(false)

    useEffect(() => {
        if (!props.users.length && !showLoading) {
            setLoading(true)
            axios
                .get('http://localhost:3000/api/users/all')
                .then((response) => {
                    console.log(response)
                    setLoading(false)
                    addUser(response.data)
                })
                .catch((error) => {
                    console.log(error)
                })
        }
    })

    return (
        <div>
            <h4>
                <u>Get Data</u>
            </h4>
            {showLoading ? (
                <div>
                    <CircularProgress color={'inherit'} />
                </div>
            ) : (
                <ul>
                    {users &&
                        users.map((item, ind) => {
                            return (
                                <li key={ind}>
                                    ID: {item.id}, {item.name},{' '}
                                    {item.tacos ? ` 🌮` : null}
                                </li>
                            )
                        })}
                </ul>
            )}
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        addUser: (user) => dispatch(addUser(user))
    }
}

const mapStateToProps = (state) => {
    return { users: state.users }
}

const WorkSectionConn = connect(
    mapStateToProps,
    mapDispatchToProps
)(WorkSection)

export default WorkSectionConn
