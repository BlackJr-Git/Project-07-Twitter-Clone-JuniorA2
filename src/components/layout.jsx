import React from 'react';
import {Trends, Navigation, Header } from './index'
import { Outlet } from 'react-router-dom/dist';

function Layout({children}) {
    return (
        <>
            {/* <div className="left-sidebar"/> */}
            <Navigation />
             <Outlet /> {/* {children} */}
            <Trends />
            {/* <div className="right-sidebar" /> */}
        </>
    );
}

export default Layout ;