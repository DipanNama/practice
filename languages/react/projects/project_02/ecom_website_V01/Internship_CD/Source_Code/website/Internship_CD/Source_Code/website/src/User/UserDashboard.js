import React from 'react'
import { DashboardComponents } from './Dashboard/DashboardComponents'
import { DashbaordSidebar } from './Dashboard/DashboardSidebar'
import { DashboardFooter } from './Dashboard/DashboardFooter'
export const UserDashboard = (props) => {

    return (
        <>
            <div className='flex'>
                <DashbaordSidebar name={props.name}/>
                <div className='w-5/6 bg-grey-900'>
                    <div className="px-4 py-8 h-full bg-gray-900 dark:border-gray-600">
                        <h2 className="text-3xl font-semibold text-center text-white">Welcome to Dashboard</h2>
                        <DashboardComponents />
                        <DashboardFooter />
                    </div>
                </div>
            </div>
        </>
    )
}
