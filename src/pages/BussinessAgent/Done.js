import React from 'react'
import doneImg from '../../Assets/Images/img_done11.png'
import mmm from '../../Assets/Images/Frame 19.png'
import backarrow from '../../Assets/Images/Line 85.png'
import { useNavigate } from 'react-router-dom'
import { paths } from '../../config/constants'

export default function Done() {
  const navigate=useNavigate()
  const onhandleBack=()=>{
    navigate(paths.home)
  }
  return (<>  
    <div className='container-fluid '>
        <div className='row '>
            <div className='col-md-6 col-sm-12 ' style={{placeContent:"center",display:"grid"}}>
               <div> <img src={mmm} /> </div>
            </div>
            <div className='col-md-6  col-sm-12 'style={{placeContent:"center",display:"grid"}}>
            <div><img src={doneImg} width="150px" /></div>
            <p></p>
            <p className='span'>Ride Booking</p>
            <p className='thanku'>Thank you for your order</p>
            <button className='btn-primary' onClick={onhandleBack}><img src={backarrow} width="65px" /> Back To Home</button>
            </div>
        </div>
        
    </div>
    </>
 )
}

