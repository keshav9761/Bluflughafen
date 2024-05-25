import React, { lazy, Suspense, useEffect } from 'react';
import { paths } from '../config/constants';
import { Route, Routes } from 'react-router-dom';
import Error from '../pages/Error';
// import AppLayout from '../component/layout/AppLayout';
import { PageLoading } from '../component/includes/PageLoading';
import AdminLayout from '../component/layout/AdminLayout';
// import DriverLayout from '../component/layout/DriverLayout';
// import Bussinesslayout from '../component/layout/Bussinesslayout';
// import AxiosProvider from '../provider/AxiosProvider';


// //Common
// const SocialLogin = lazy(() => import('../pages/SocialLogin'));
// const Imprint = lazy(() => import('../pages/Imprint'));
// const BussinessAccount = lazy(() => import('../pages/BussinessAccount'));
// const NewsAndUpdate = lazy(() => import('../pages/NewsAndUpdate'));
// const AboutUs = lazy(() => import('../pages/AboutUs'));
// const TermCondition = lazy(() => import('../pages/TermAndCondition'));
// const Done = lazy(() => import('../pages/Done'));
// const Summary = lazy(() => import('../pages/Summary'));
// const ContactInfo = lazy(() => import('../pages/ContactInfo'));
// const VehicleOption = lazy(() => import('../pages/VehicleOption'));
// const EditProfile = lazy(() => import('../pages/EditProfile'));
// const MyRide = lazy(() => import('../pages/MyRide'));
// const Home = lazy(() => import('../pages/Home'));



//admin
const AdminLogin = lazy(() => import('../pages/admin/AdminLogin'));
const Dashboard = lazy(() => import('../pages/admin/Dashboard'));
const PartnerList = lazy(() => import('../pages/admin/PartnerList'));
const PartnerSetUp = lazy(() => import('../pages/admin/PartnerSetup'));
const UserManager = lazy(() => import('../pages/admin/UserManager'));
const AddNewVehicle = lazy(() => import('../pages/admin/AddnewVehicle'));
const AdminBooking = lazy(() => import('../pages/admin/AdminBooking'));
const BookingIdPage = lazy(() => import('../pages/admin/BookingIdPage'));

//Bussiness Agent
// const AgentTermsConditons = lazy(() => import('../pages/BussinessAgent/TermsAndConditons'));
// const BusinesHome = lazy(() => import('../pages/BussinessAgent/Home'));
// const BusinesVehicleoption = lazy(() => import('../pages/BussinessAgent/VehivleOption'));
// const BusinesContact = lazy(() => import('../pages/BussinessAgent/Contact'));
// const BusinesSummary = lazy(() => import('../pages/BussinessAgent/Summery'));
// const BusinesDone = lazy(() => import('../pages/BussinessAgent/Done'));

//driver
// const DriverTermsConditons = lazy(() => import('../pages/driver/DriverTermsAndCondition'));
// const DriverVehical = lazy(() => import('../pages/driver/DriveAndVehicle'));
// const RideDetails = lazy(() => import('../pages/driver/RideDetails'));
// const TaxValues = lazy(() => import('../pages/driver/TaxValues'));
// const DriverEditProfile = lazy(() => import('../pages/driver/DriverEditProfile'));

// //auth
// const ForgetPassword = lazy(() => import('../pages/auth/ForgetPassword'));
// const LogIn = lazy(() => import('../pages/auth/Login'));
// const DriverRegistration = lazy(() => import('../pages/auth/DriverRegistration'));
// const PartnerRegister = lazy(() => import('../pages/auth/PartnerRegister'));

function RouteApp() {

    return (<>
        {/* <AxiosProvider /> */}
        <Routes>
            {/* auth page */}
            {/* <Route path={paths.accounts.home} element={<AppLayout />}>
                <Route path={paths.accounts.forgetPassword} element={<Suspense fallback={<PageLoading />}><ForgetPassword /></Suspense>} />
                <Route path={paths.accounts.driverRegister} element={<Suspense fallback={<PageLoading />}><DriverRegistration /></Suspense>} />
                <Route path={paths.accounts.partnerRegister} element={<Suspense fallback={<PageLoading />}><PartnerRegister /></Suspense>} />
                <Route path={paths.accounts.login} element={<Suspense fallback={<PageLoading />}><LogIn /></Suspense>} />
                <Route path={paths.accounts.socialLogin} element={<Suspense fallback={<PageLoading />}><SocialLogin /></Suspense>} />
            </Route> */}

            {/* drivers page */}
            {/* <Route path={paths.driver.home} element={<DriverLayout />}>
                <Route path={paths.driver.driveVehicle} element={<Suspense fallback={<PageLoading />}><DriverVehical /></Suspense>} />
                <Route path={paths.driver.taxValues} element={<Suspense fallback={<PageLoading />}><TaxValues /></Suspense>} />
                <Route path={paths.driver.rideDetails} element={<Suspense fallback={<PageLoading />}><RideDetails /></Suspense>} />
                <Route path={paths.driver.driverEditProfile} element={<Suspense fallback={<PageLoading />}><DriverEditProfile /></Suspense>} />
                <Route path={paths.driver.driverTermsCondition} element={<Suspense fallback={<PageLoading />}><DriverTermsConditons /></Suspense>} />
            </Route> */}


            {/* businessAgent */}

            {/* <Route path={paths.businessAgent.home} element={<Bussinesslayout />}>
                <Route path={paths.businessAgent.home} element={<Suspense fallback={<PageLoading />}><BusinesHome /></Suspense>} />
                <Route path={paths.businessAgent.vehicle} element={<Suspense fallback={<PageLoading />}><BusinesVehicleoption /></Suspense>} />
                <Route path={paths.businessAgent.contact} element={<Suspense fallback={<PageLoading />}><BusinesContact /></Suspense>} />
                <Route path={paths.businessAgent.summary} element={<Suspense fallback={<PageLoading />}><BusinesSummary /></Suspense>} />
                <Route path={paths.businessAgent.done} element={<Suspense fallback={<PageLoading />}><BusinesDone /></Suspense>} />
                <Route path={paths.businessAgent.editProfile} element={<Suspense fallback={<PageLoading />}><DriverEditProfile /></Suspense>} />
                <Route path={paths.businessAgent.rideDetails} element={<Suspense fallback={<PageLoading />}><RideDetails /></Suspense>} />
                <Route path={paths.businessAgent.taxValues} element={<Suspense fallback={<PageLoading />}><TaxValues /></Suspense>} />
                <Route path={paths.businessAgent.termsCondition} element={<Suspense fallback={<PageLoading />}><AgentTermsConditons /></Suspense>} />
            </Route> */}



            {/* admin page */}
            <Route path={paths.home} element={<AdminLayout />}>
                <Route  element={<Suspense fallback={<PageLoading />}><AdminLogin /></Suspense>} />
                <Route index element={<Suspense fallback={<PageLoading />}><Dashboard /></Suspense>} />
                <Route path={paths.admin.partnerList} element={<Suspense fallback={<PageLoading />}><PartnerList /></Suspense>} />
                <Route path={paths.admin.partnerSetup} element={<Suspense fallback={<PageLoading />}><PartnerSetUp /></Suspense>} />
                <Route path={paths.admin.userManager} element={<Suspense fallback={<PageLoading />}><UserManager /></Suspense>} />
                <Route path={paths.admin.addnewVehicle} element={<Suspense fallback={<PageLoading />}><AddNewVehicle /></Suspense>} />
                <Route path={paths.admin.adminbooking} element={<Suspense fallback={<PageLoading />}><AdminBooking /></Suspense>} />
                <Route path={paths.admin.adminbookingId} element={<Suspense fallback={<PageLoading />}><BookingIdPage /></Suspense>} />
            </Route>


            {/* common pages */}
            {/* <Route path={paths.home} element={<AppLayout />}>
                <Route index element={<Suspense fallback={<PageLoading />}><Home /></Suspense>} />
                <Route path={paths.vehicle} element={<Suspense fallback={<PageLoading />}><VehicleOption /></Suspense>} />
                <Route path={paths.contact} element={<Suspense fallback={<PageLoading />}><ContactInfo /></Suspense>} />
                <Route path={paths.summary} element={<Suspense fallback={<PageLoading />}><Summary /></Suspense>} />
                <Route path={paths.done} element={<Suspense fallback={<PageLoading />}><Done /></Suspense>} />
                <Route path={paths.termCondition} element={<Suspense fallback={<PageLoading />}><TermCondition /></Suspense>} />
                <Route path={paths.aboutUs} element={<Suspense fallback={<PageLoading />}><AboutUs /></Suspense>} />
                <Route path={paths.newsAndUpdate} element={<Suspense fallback={<PageLoading />}><NewsAndUpdate /></Suspense>} />
                <Route path={paths.bussinessAccount} element={<Suspense fallback={<PageLoading />}><BussinessAccount /></Suspense>} />
                <Route path={paths.imprint} element={<Suspense fallback={<PageLoading />}><Imprint /></Suspense>} />
                <Route path={paths.editProfile} element={<Suspense fallback={<PageLoading />}><EditProfile /></Suspense>} />
                <Route path={paths.myRide} element={<Suspense fallback={<PageLoading />}><MyRide /></Suspense>} />
            </Route> */}

            <Route path={"*"} element={<Suspense fallback={<PageLoading />}><Error /></Suspense>} />

        </Routes>
    </>);
}

export default RouteApp;