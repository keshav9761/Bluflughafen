import React, { useEffect } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import BussinessHeader from '../includes/BussinessHeader'
import Footer from '../includes/Footer'
import { useStateValue } from '../../provider/stateProvider'
import { paths } from '../../config/constants'

export default function Bussinesslayout() {

    let location = useLocation();
    const navigate = useNavigate();
    const [{ user }, dispatch] = useStateValue();
  
    useEffect(() => {
        if (!user || user.role != 2) {
            navigate(paths.accounts.login, { state: { from: location }, replace: true });
        }
    }, [location]);

    return (
        <div>
            <BussinessHeader />
            <Outlet />
            <Footer />
        </div>
    )
}
