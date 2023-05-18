import React from 'react'
import { Link } from 'react-router-dom'
import Helmet  from '../Components/Helmet/Helmet'

export const Logout = (props) => {

    return (
        <div>
            <Helmet title="Logout" />
            <h1>You signed out of your account</h1>
            <Link to="/login" >Back to Login</Link>
            <br />
            <Link to="/" >Back to Home</Link>
        </div>
    )
}
