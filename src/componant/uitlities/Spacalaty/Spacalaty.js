import React from 'react';
import SpacalCard from '../SpacalCard/SpacalCard';
import VarticalTitle from '../VarticalTitle/VarticalTitle';
import './Spacalaty.css'

const Spacalaty = () => {
    return (
        <div className='text-center my-5 py-5 spacal-main'>
            <div>
                <h1>Hello! I'm Sajim, a freelance Photographer.</h1>
                <p>Based in Bagladesh, I specialize in landscape, advertorial and conceptual photography.</p>
            </div>
            <VarticalTitle title={'MY SPECIALTIES'} st={1}></VarticalTitle>
            <div className='w-75 w--100 mx-auto'>
                <SpacalCard></SpacalCard>
            </div>
        </div>
    );
};

export default Spacalaty;