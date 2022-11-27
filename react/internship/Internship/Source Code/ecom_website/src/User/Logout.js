import React from 'react'
import { Link } from 'react-router-dom'
export const Logout = (props) => {

    return (
        <div>
            <h1>You signed out of your account</h1>
            <Link to="/login" >Back to Login</Link>
            <br />
            <Link to="/" >Back to Home</Link>
        </div>
    )
}
