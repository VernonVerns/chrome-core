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

const router = createBrowserRouter(
    createRoutesFromElements([
        <Route key="layout" path="/" element={<MainLayout />}>
            <Route key="welcome-page" index path="" element={<WelcomePage />} />,
            <Route key="contact-us" path="contact-us" element={<ContactPage />} />,
            <Route key="about-us" path="about-us" element={<AboutPage />} />
        </Route>
    ])
);

export default router;
