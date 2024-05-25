import React from 'react'
import { OpenBookIdModel } from '../../component/Elements/OpenBookIdModel'

export default function BookingIdPage({open}) {
    return (<>
        <div className='container-fluid bg-white'>
            <div className='container bg-white'>
                <div className='row '>
                    <div className='row'>
                        <div className='col-md-3'>
                            <h3 className='admin-booking my-5 whiteSpace-'>Booking Details</h3>
                        </div>
                        <div className='col-md-9 mt-5 gap-3 d-flex flex-wrap justify-content-end '>

                            <div>
                                <button className='btn btn-primary'>Export at xlsx</button>
                            </div>
                            <div>
                                <button className='btn btn-primary'>Export at csv</button>
                            </div>
                            <div>
                                <button className='btn btn-primary'>Export to txt</button>
                            </div>

                        </div>
                    </div>
                    <OpenBookIdModel open={open}/>
                    <div className='col-md-12 p-1 white-card mb-5'>
                        <table className="table  table-bordered " cellPadding="50%"  >
                            <thead>
                                <tr style={{ backgroundColor: "#F4F4F4" }}>
                                    <th className='label-admin-text text-center whiteSpace-wrap '>Booking-ID</th>
                                    <th className='label-admin-text text-center '>Ride Fare</th>
                                    <th className='label-admin-text text-center '>Collected Amount</th>
                                    <th className='label-admin-text text-center '>Payment Type</th>
                                    <th className='label-admin-text text-center '>Amount To Blu</th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr className=''>
                                    <th className='text-admin text-center'>Booking-1111111131</th>
                                    <td className='text-admin text-center'>39.00€</td>
                                    <td className='text-admin text-center'>47.00€</td>
                                    <td className='text-admin text-center'>Advance Payment</td>

                                    <td className='text-admin p-3' style={{ backgroundColor: "#D2F1C7", whiteSpace: "nowrap", textAlign: "center" }}> <input type="radio"></input>Unapproved</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>


            </div>
        </div>
    </>)
}



