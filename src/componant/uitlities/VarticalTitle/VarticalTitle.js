import React from 'react';
import './VarticalTitle.css'

const VarticalTitle = ({title,st}) => {
   
    return (
        <div className='w-25 d-flex justify-content-center align-items-center mx-auto my-3'>
            <div className='w-25'>
                <hr className={st?'m-0 p-0 text-dark':'m-0 p-0 text-white'} /><hr className={st?'mt-1 p-0 text-dark':'mt-1 p-0 text-white'} />
            </div>
            <div className='mx-4'>
                <h6 id='specal'>{title}</h6>
            </div>
            <div className='w-25'>
                <hr className={st?'m-0 p-0 text-dark':'m-0 p-0 text-white'} /><hr className={st?'mt-1 p-0 text-dark':'mt-1 p-0 text-white'} />
            </div>
        </div>
    );
};

export default VarticalTitle;