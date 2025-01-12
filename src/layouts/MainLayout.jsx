import React from 'react'
import { Outlet } from 'react-router-dom'
import FooterComponent from '../components/FooterComponent'
import NavComponent from '../components/NavComponent'

const MainLayout = () => {
    return (
        <>
            <NavComponent />
            <Outlet />
            <FooterComponent />
        </>
    )
}

export default MainLayout