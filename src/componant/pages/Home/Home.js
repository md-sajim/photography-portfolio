import React from 'react';
import Carusul from '../../uitlities/Carusul/Carusul';
import FormJurnalest from '../../uitlities/FormTheJurnalest/FormJurnalest';
import LatastFlickerShort from '../../uitlities/LatastFlickrShort/LatastFlickerShort';
import MyLatastSort from '../../uitlities/MyLatastSort/MyLatastSort';
import Myservice from '../../uitlities/Myservice/Myservice';
import MySkeles from '../../uitlities/MySkeles/MySkeles';
import Spacalaty from '../../uitlities/Spacalaty/Spacalaty';

const Home = () => {
    return (
        <div>
            <Carusul></Carusul>
            <Spacalaty></Spacalaty>
            <MyLatastSort></MyLatastSort>
            <Myservice></Myservice>
            <FormJurnalest></FormJurnalest>
            <LatastFlickerShort></LatastFlickerShort>
            <MySkeles></MySkeles>
        </div>
    );
};

export default Home;