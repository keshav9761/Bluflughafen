const base = '/';

let apiBase = "https://i5y2sl7e13.execute-api.ap-south-1.amazonaws.com/api/";

export const paths = {
    home: base,
    // accounts: {
    //     home: base + 'accounts',
    //     login: base + 'accounts/login',
    //     socialLogin: base + 'accounts/social-login',
    //     forgetPassword: base + 'accounts/forget-password',
    //     driverRegister: base + 'accounts/driver-register',
    //     partnerRegister: base + 'accounts/partner-register',
    // },


    // driver: {
    //     home: base + 'driver', 
    //     driveVehicle: base + 'driver/drive-vehicle',
    //     rideDetails: base + 'driver/ride-details',
    //     taxValues: base + 'driver/tax-values',
    //     driverEditProfile: base + 'driver/edit-profile',
    //     driverTermsCondition: base + 'driver/terms-conditions',
    // },

    // businessAgent: {
    //     home: base + 'business',
    //     vehicle: base + 'business/vehicle',
    //     contact: base + 'business/contact',
    //     summary: base + 'business/summary',
    //     done: base + 'business/done',
    //     rideDetails: base + 'business/ride-details',
    //     taxValues: base + 'business/tax-values',
    //     editProfile: base + 'business/edit-profile',
    //     termsCondition: base + 'business/terms-conditions',
    // },


    admin: {
        home: base + 'admin/login' ,
        dashboard: base + 'admin/dashboard',
        partnerList: base + 'admin/partnerlist',
        partnerSetup: base + 'admin/partnersetup',
        userManager: base + 'admin/usermanager',
        addnewVehicle: base + 'admin/addnewvehicle',
        // driverRegister: base + 'driver/driver-register',
        adminbooking: base + 'admin/adminbooking',
        adminbookingId: base + 'admin/adminbooking-id',

    },


    // vehicle: base + 'vehicle',
    // contact: base + 'contact',
    // summary: base + 'summary',
    // done: base + 'done',
    // adminbooking: base + 'adminbooking', 
    // driveVehicle: base + 'drive-vehicle',
    // editProfile: base + 'edit-profile',
    // myRide: base + 'myride',
    // bookingId: base + 'BookingId',
    // termCondition: base + 'term-Condition',
    // aboutUs: base + 'about-us',
    // newsAndUpdate: base + 'news-and-update',
    // bussinessAccount: base + 'bussiness-account',
    // imprint: base + 'imprint',
}