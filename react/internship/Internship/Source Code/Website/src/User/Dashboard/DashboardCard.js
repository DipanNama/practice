import React from 'react'
import { Link } from 'react-router-dom';
export const DashboardCard = (props) => {
    return (
        <div>
            <div className={`flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 ${props.bgColor} rounded shadow-xl group hover:shadow-2xl`}>
                <div className="p-5">
                    <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-indigo-50">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d={props.logo} />
                        </svg>
                    </div>
                    <p className="mb-2 font-extrabold">{props.title}</p>
                    <button type="button" className={`text-white bg-gradient-to-r from-${props.btnColor}-500 via-${props.btnColor}-600 to-${props.btnColor}-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-${props.btnColor}-300 dark:focus:ring-${props.btnColor}-800 shadow-lg shadow-${props.btnColor}-500/50 dark:shadow-lg dark:shadow-${props.btnColor}-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2`}><Link className="font-bold" to={props.linkPath}>{props.linkText}</Link></button>
                </div>
                <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
            </div>
        </div>
    );
}
