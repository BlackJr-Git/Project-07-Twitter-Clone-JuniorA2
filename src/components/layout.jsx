import React from 'react';
import {Trends, Navigation } from './index'
import { Outlet } from 'react-router-dom/dist';

function Layout({children}) {
    return (
        <>
            {/* <div className="left-sidebar"/> */}
            <Navigation />
            {/* {children} */} <Outlet />
            <Trends />
            {/* <div className="right-sidebar" /> */}
        </>
    );
}

export default Layout;