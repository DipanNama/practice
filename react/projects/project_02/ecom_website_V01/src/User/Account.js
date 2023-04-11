import React from 'react'
import { UserDashboard } from './UserDashboard'
import Helmet  from '../Components/Helmet/Helmet'

export const Account = (props) => {
    return (
        <div>
            <>
            <Helmet title="Account"/>
            <UserDashboard name={props.name}/>
            </>
        </div>
    )
}
