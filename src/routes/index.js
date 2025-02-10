import React from "react";
import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import WelcomePage from "../pages/WelcomePage";
import OurBusinessPage from "../pages/OurBusinessPage";
import GovernancePage from "../pages/GovernancePage";

const router = createBrowserRouter(
    createRoutesFromElements([
        <Route key="layout" path="/" element={<MainLayout />}>
            <Route key="welcome-page" index path="" element={<WelcomePage />} />,
            <Route key="contact-us" path="contact-us" element={<ContactPage />} />,
            <Route key="about-us" path="about-us" element={<AboutPage />} />,
            <Route key="our-business" path="our-business" element={<OurBusinessPage />} />,
            <Route key="governance" path="governance" element={<GovernancePage />} />
        </Route>
    ])
);

export default router;
