import React from 'react'
import { DashboardCard } from './DashboardCard'

export const DashboardComponents = () => {
    return (
        <div>
            <div className="bg-gray-900">
                <div className="relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                    <div className="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                        <DashboardCard logo="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" title="My Profile" desc="something important" linkPath="/profile" linkText="Open Profile" btnColor="green" bgColor="bg-green-500"/>
                        <DashboardCard logo="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" title="Activity" desc="something important" linkPath="/activity" linkText="Open Activity" btnColor="blue" bgColor="bg-blue-500"/>
                        <DashboardCard logo="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" title="Notifications" desc="something important" linkPath="/notifications" linkText="Open Notifications" btnColor="violet" bgColor="bg-violet-500"/>
                        <DashboardCard logo="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2zM10 8.5a.5.5 0 11-1 0 .5.5 0 011 0zm5 5a.5.5 0 11-1 0 .5.5 0 011 0z" title="Orders" desc="something important" linkPath="/orders" linkText="Open Orders" btnColor="rose" bgColor="bg-rose-500"/>
                        <DashboardCard logo="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" title="Wishlist" desc="something important" linkPath="/wishlist" linkText="Open Wishlist" btnColor="emerald" bgColor="bg-emerald-400"/>
                        <DashboardCard logo="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" title="Billing" desc="something important" linkPath="/billing" linkText="Open Billing" btnColor="sky" bgColor="bg-sky-400"/>
                        <DashboardCard logo="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" title="Cart" desc="something important" linkPath="/cart" linkText="Open Cart" btnColor="purple" bgColor="bg-purple-500"/>
                        <DashboardCard logo="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" title="Explore" desc="something important" linkPath="/explore" linkText="Open Explore" btnColor="red" bgColor="bg-red-400"/>
                        <DashboardCard logo="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" title="History" desc="something important" linkPath="/history" linkText="Open History" btnColor="teal" bgColor="bg-teal-200"/>
                        <DashboardCard logo="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" title="Premium Subscription" desc="something important" linkPath="/premium" linkText="Open Premium" btnColor="cyan" bgColor="bg-cyan-300"/>
                        <DashboardCard logo="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" title="Rewards" desc="something important" linkPath="/rewards" linkText="Open Rewards" btnColor="fuchsia" bgColor="bg-fuchsia-400"/>
                        <DashboardCard logo="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" title="FAQs" desc="something important" linkPath="/faq" linkText="Open FAQs" btnColor="rose" bgColor="bg-rose-400"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
