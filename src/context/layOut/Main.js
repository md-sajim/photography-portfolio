import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../componant/Shard/Footer/Footer';
import Navber from '../../componant/Shard/Navber/Navber';

const Main = () => {
    return (
        <div>
            <Navber></Navber>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;