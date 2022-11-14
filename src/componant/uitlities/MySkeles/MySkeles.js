import React from 'react';
import { ProgressBar } from 'react-bootstrap';
import profil from '../../../essetcs/img/SAJIM.jpg'

const MySkeles = () => {
    const prograss = [
        {id:1, value: 90, titla: "Photoshop " },
        {id:2, value: 80, titla: "Final Cut " },
        {id:3, value: 75, titla: "Studio Photography " },
        {id:4, value: 85, titla: "Motion Video" },
    ]
    return (
        <div className='container px-0  py-5'>
            <div className='row   p-0 w-100 text-secondary'>
                <div className=' col-12 col-lg-6'>
                    <div className=' d-flex align-items-center my-3'>

                        <div className='me-2'>
                            <h6 id='specal'>A LITTLE ABOUT ME</h6>
                        </div>
                        <div className='w-25'>
                            <hr className='m-0 p-0 text-dark' /><hr className='my-1  text-dark' />
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-12 col-lg-4   '>
                            <img className='' style={{ width: "200px", padding: "8px", marginTop: "15px" }} src={profil} alt="" />
                        </div>
                        <div className='col-12 col-lg-8'>
                            <h5>
                                infoCras mattis consectetur purus sitor amet sed donec malesuada odio.
                            </h5>
                            <p>Curabitur blandit tempus porttitor. Vollis ac inceptos mollisestor commodo luctus. Curabitur blandit tempus porttitor. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Vestibulum id ligulas semper. Cum sociis natoque penatibus et magnis maecenas. Donec ullamcorper nulla non metus auctor fringilla. Cras justo odio, dapibus. Aenean lacinia bibendum nulla sed consectetur.</p>
                        </div>

                    </div>
                </div>
                <div className='col-12 col-lg-6'>
                    <div className=' d-flex align-items-center my-3'>

                        <div className='me-2'>
                            <h6 id='specal'>MY SKILLS</h6>
                        </div>
                        <div className='w-25'>
                            <hr className='m-0 p-0 text-dark' /><hr className='my-1  text-dark' />
                        </div>
                    </div>
                    <p>Duis non lectus sit amet est imperdiet cursus elementum vitae eros. Etiam adipiscingmorbi vitae magna tellus, ac mattis urna phasellus rhoncus.</p>
                    {
                        prograss.map(prog =>
                            <div
                            key={prog.id}
                             className='mb-2'>
                                <label htmlFor="prograss">{prog.titla}<span className='text-info'> - {prog.value}%</span></label>
                                <ProgressBar id='prograss' animated now={prog.value} />
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default MySkeles;