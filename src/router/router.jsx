import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../Layout/MainLayout'
import { Dashboard, Home } from '../Page'

const router = createBrowserRouter([{
    path: "/",
    element: <MainLayout />,
    children: [
        // {
        //     path:"/",
        //     element: <Home />
        // },
        {
            path:"/",
            element: <Dashboard />
        },
    ]
},
])

export default router