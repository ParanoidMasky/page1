import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Logout extends Component {

    constructor (props) {
        super(props)
        localStorage.removeItem("token")
    }

    render() {
        return (
            <div className="login-container">
                <center>
                    <h1> Has salido... </h1>
                    <Link to="/login"> Volver a iniciar sesión </Link>
                </center>
            </div>
        )
    }
}
