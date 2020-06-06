/* eslint-disable */

import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addUser } from 'store/actions/index'
import axios from 'axios'
// @material-ui/core componentsss
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Switch from '@material-ui/core/Switch'

function PostRoute(props) {
    const { addUser } = props

    const defultForm = {
        name: '',
        message: '',
        tacos: false
    }

    const [data, setData] = useState(defultForm)
    const [showLoading, setLoading] = useState(false)

    function onSubmit() {
        setLoading(true)
        axios
            .post('/api/users/add', data)
            .then(response => {
                props.addUser(response.data)
                setData(defultForm)
                setLoading(false)
            })
            .catch(error => {
                console.log(error)
            })
    }

    function onChange(event) {
        event.persist()
        let { id, value } = event.target
        setData(data => ({ ...data, [id]: value }))
    }

    function onChangeSwitch(field) {
        setData(data => ({ ...data, [field]: !data[field] }))
    }

    return (
        <form>
            <h4>
                <u>Post New Data</u>
            </h4>

            <input
                label="User Name"
                id="name"
                onChange={e => {
                    onChange(e)
                }}
            />
            <FormControlLabel
                control={
                    <Switch
                        checked={data.tacos}
                        onChange={() => onChangeSwitch('tacos')}
                        value={data.tacos}
                    />
                }
                label="Tacos"
            />
            <input
                label="Message"
                id="message"
                onChange={e => {
                    onChange(e)
                }}
            />
            <button onClick={onSubmit} color="primary">
                Add User
            </button>
        </form>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        addUser: user => dispatch(addUser(user))
    }
}

const PostRouteConn = connect(null, mapDispatchToProps)(PostRoute)

export default PostRouteConn
