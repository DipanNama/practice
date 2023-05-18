import React from 'react'
import { DashbaordSidebar } from './Dashboard/DashboardSidebar'
import { DashboardFooter } from './Dashboard/DashboardFooter'
import Helmet  from '../Components/Helmet/Helmet'

export const UserNotifications = (props) => {
    return (
        <div>
            <Helmet title="Notifications" />
            <div className='flex'>
                <DashbaordSidebar name={props.name} />
                <div className='w-5/6 dark:bg-grey-900'>
                    <div className="px-4 py-8 bg-white h-full dark:bg-gray-900 dark:border-gray-600">
                        <h2 className="text-3xl font-semibold text-center text-gray-800 dark:text-white">Welcome to Dashboard</h2>

                        <DashboardFooter />
                    </div>
                </div>
            </div>
        </div>
    )
}
