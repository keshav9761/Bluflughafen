import React, { useEffect } from 'react'
import DriverHeader from '../includes/DriverHeader'
import Footer from '../includes/Footer'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { useStateValue } from '../../provider/stateProvider'
import { paths } from '../../config/constants'


function DriverLayout() {

    let location = useLocation();
    const navigate = useNavigate();
    const [{ user }] = useStateValue();


    useEffect(() => {
        if (!user || user.role === 3) {
            navigate(paths.accounts.login, { state: { from: location }, replace: true });
        }
    }, [location]);
   
    return (
        <div>
            <DriverHeader />
            <Outlet />
            <Footer />
        </div>
    )
}

export default DriverLayout