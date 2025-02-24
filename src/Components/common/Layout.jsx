import React from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from '../common/Footer'

const Layout = () => {
    return (

         <div>
            <Navbar />
            <section className="overflow-hidden">
                <Outlet />
            </section>
            <div className="mt-[100px]">
         <Footer />
       </div>
            </div>   
    );
};

export default Layout;
