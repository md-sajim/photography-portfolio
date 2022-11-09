import React from 'react';
import Carusul from '../../uitlities/Carusul/Carusul';
import MyLatastSort from '../../uitlities/MyLatastSort/MyLatastSort';
import Spacalaty from '../../uitlities/Spacalaty/Spacalaty';

const Home = () => {
    return (
        <div>
            <Carusul></Carusul>
            <Spacalaty></Spacalaty>
            <MyLatastSort></MyLatastSort>
        </div>
    );
};

export default Home;