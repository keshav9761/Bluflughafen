import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../includes/Header'
import Footer from '../includes/Footer'

export default function AppLayout() {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}
