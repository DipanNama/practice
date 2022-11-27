import React from 'react'
import { UserDashboard } from './UserDashboard'

export const Account = (props) => {
    return (
        <div>
            <UserDashboard name={props.name}/>
        </div>
    )
}
