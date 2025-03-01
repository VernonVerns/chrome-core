import {React, useEffect} from 'react'
import { Outlet, useLocation } from "react-router-dom";
import FooterComponent from '../components/FooterComponent'
import NavComponent from '../components/NavComponent'

const MainLayout = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return (
        <>
            <NavComponent />
            <Outlet />
            <FooterComponent />
        </>
    )
}

export default MainLayout