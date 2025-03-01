import React, { lazy, Suspense } from "react";
import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import LazyLoader from "../components/LazyLoader";

// Lazy load the pages
const WelcomePage = lazy(() => import("../pages/WelcomePage"));
const AboutPage = lazy(() => import("../pages/AboutPage"));
const ContactPage = lazy(() => import("../pages/ContactPage"));
const OurBusinessPage = lazy(() => import("../pages/OurBusinessPage"));
const GovernancePage = lazy(() => import("../pages/GovernancePage"));
const SocialResponsibilityPage = lazy(() => import("../pages/SocialResponsibilityPage"));

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<MainLayout />}>
            <Route
                index
                element={
                    <Suspense fallback={<LazyLoader />}>
                        <WelcomePage />
                    </Suspense>
                }
            />
            <Route
                path="about-us"
                element={
                    <Suspense fallback={<LazyLoader />}>
                        <AboutPage />
                    </Suspense>
                }
            />
            <Route
                path="contact-us"
                element={
                    <Suspense fallback={<LazyLoader />}>
                        <ContactPage />
                    </Suspense>
                }
            />
            <Route
                path="our-business"
                element={
                    <Suspense fallback={<LazyLoader />}>
                        <OurBusinessPage />
                    </Suspense>
                }
            />
            <Route
                path="governance"
                element={
                    <Suspense fallback={<LazyLoader />}>
                        <GovernancePage />
                    </Suspense>
                }
            />
            <Route
                path="social-responsibility"
                element={
                    <Suspense fallback=<LazyLoader />>
                        <SocialResponsibilityPage />
                    </Suspense>
                }
            />
        </Route>
    )
);

export default router;
