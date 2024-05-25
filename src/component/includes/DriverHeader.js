import React, { useEffect, useState } from 'react';
import logo from '../../Assets/Images/logo.png'
import { useTranslation } from 'react-i18next'
import TranslateDropdown from '../Elements/TranslateDropdown'
import { Box, FormControl, MenuItem, Select, colors } from '@mui/material';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import Button from '@mui/material/Button';
import { Link, useNavigate } from 'react-router-dom';
import Menu from '@mui/material/Menu';
import { paths } from '../../config/constants';
import { useStateValue } from '../../provider/stateProvider';
import { authService } from '../../services/authService';

export default function DriverHeader() {

  const [dropValue, setDropValue] = useState("Become Partner");
  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate()

  const [{user}, dispatch] = useStateValue();
  
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  console.log(dropValue)

  // useEffect(() => {
  //   if(dropValue === "business"){
  //     navigate(paths.accounts.partnerRegister)
  //   } else if(dropValue === "driver"){
  //     navigate(paths.accounts.driverRegister)
  //   }
  // },[dropValue]);

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  const handleChange = (e) => {
    setDropValue(e.target.value);
  }
  const handleRegistration = () => {
    navigate(paths.accounts.driverRegister)

  }

  const { t } = useTranslation();
  
  const handleLogout = () => {
   const _tempData = authService.removeUser();
    dispatch({
      type: 'SET_USER',
      user: _tempData,
  });
    navigate(paths.accounts.login);
  }

  return (
    <div>
      <div className='top-header d-flex gap-4 p-2 ' style={{ background: '#F5F8FA' }}>
        <div className='px-4'>
          <span >
            <svg width="18" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13 1.00001C13 0.734794 13.1053 0.48044 13.2929 0.292903C13.4804 0.105367 13.7348 1.00539e-05 14 1.00539e-05C16.6513 0.00292165 19.1931 1.05743 21.0678 2.93216C22.9426 4.80689 23.9971 7.34874 24 10C24 10.2652 23.8946 10.5196 23.7071 10.7071C23.5196 10.8947 23.2652 11 23 11C22.7348 11 22.4804 10.8947 22.2929 10.7071C22.1053 10.5196 22 10.2652 22 10C21.9976 7.87901 21.154 5.84556 19.6542 4.34579C18.1544 2.84601 16.121 2.00239 14 2.00001C13.7348 2.00001 13.4804 1.89465 13.2929 1.70712C13.1053 1.51958 13 1.26523 13 1.00001ZM14 6.00001C15.0609 6.00001 16.0783 6.42144 16.8284 7.17158C17.5786 7.92173 18 8.93915 18 10C18 10.2652 18.1053 10.5196 18.2929 10.7071C18.4804 10.8947 18.7348 11 19 11C19.2652 11 19.5196 10.8947 19.7071 10.7071C19.8946 10.5196 20 10.2652 20 10C19.9984 8.4092 19.3657 6.884 18.2409 5.75912C17.116 4.63425 15.5908 4.0016 14 4.00001C13.7348 4.00001 13.4804 4.10537 13.2929 4.2929C13.1053 4.48044 13 4.73479 13 5.00001C13 5.26523 13.1053 5.51958 13.2929 5.70712C13.4804 5.89465 13.7348 6.00001 14 6.00001ZM23.093 16.739C23.6725 17.3201 23.9979 18.1073 23.9979 18.928C23.9979 19.7487 23.6725 20.5359 23.093 21.117L22.183 22.166C13.993 30.007 -5.93701 10.082 1.78299 1.86601L2.93299 0.86601C3.51475 0.302687 4.29492 -0.00894087 5.10469 -0.0014551C5.91446 0.00603066 6.68873 0.332028 7.25999 0.90601C7.29099 0.93701 9.14399 3.34401 9.14399 3.34401C9.69382 3.92164 9.99989 4.68894 9.99859 5.48641C9.99728 6.28389 9.6887 7.05018 9.13699 7.62601L7.97899 9.08201C8.61983 10.6391 9.56205 12.0543 10.7515 13.2461C11.9409 14.438 13.3542 15.383 14.91 16.027L16.375 14.862C16.9509 14.3107 17.717 14.0025 18.5143 14.0014C19.3115 14.0003 20.0785 14.3063 20.656 14.856C20.656 14.856 23.062 16.708 23.093 16.739ZM21.717 18.193C21.717 18.193 19.324 16.352 19.293 16.321C19.087 16.1167 18.8086 16.0021 18.5185 16.0021C18.2284 16.0021 17.95 16.1167 17.744 16.321C17.717 16.349 15.7 17.956 15.7 17.956C15.5641 18.0642 15.4023 18.1351 15.2306 18.1618C15.059 18.1884 14.8833 18.1699 14.721 18.108C12.7054 17.3576 10.8747 16.1827 9.35282 14.6631C7.83092 13.1434 6.65339 11.3144 5.89999 9.30001C5.83318 9.13547 5.81141 8.9561 5.83689 8.78035C5.86237 8.6046 5.9342 8.43881 6.04499 8.30001C6.04499 8.30001 7.65199 6.28201 7.67899 6.25601C7.88325 6.05 7.99786 5.77163 7.99786 5.48151C7.99786 5.19139 7.88325 4.91302 7.67899 4.70701C7.64799 4.67701 5.80699 2.28201 5.80699 2.28201C5.59789 2.09452 5.32499 1.99411 5.04423 2.00136C4.76348 2.00861 4.49613 2.12297 4.29699 2.32101L3.14699 3.32101C-2.49501 10.105 14.776 26.418 20.721 20.8L21.632 19.75C21.8455 19.5523 21.9737 19.2793 21.9896 18.9887C22.0054 18.6982 21.9077 18.4128 21.717 18.193Z" fill="black" />
            </svg>
          </span>
          <span>
            +49 178 8404957
          </span>
        </div>
        <div>
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt" viewBox="0 0 16 16">
              <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
              <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
            </svg>
          </span>
          <span>
            Bonner Str. 31, 65428 Rüsselsheim
          </span>
        </div>
      </div>
      <div className='d-flex justify-content-between flex-wrap'>
        <Navbar className='white-card' expand="md" style={{ width: "100%" }}>
          <NavbarBrand className='mx-3'><img src={logo} width="180px" height="56px" /></NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto " navbar>
              <NavItem>
                <NavLink className='link-text'>
                  <Link to={paths.home} className='link '>{t('header-calculte&price')}</Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className='link-text'>
                  <Link to={paths.aboutUs} className='link' >{t('header-aboutUs')}</Link>
                </NavLink>
              </NavItem>
              {/* <NavItem>
                <NavLink className='link-text'>
                  <Link to={paths.bussinessAccount} className=' link'>{t('header-BussinesAccount')}</Link>
                </NavLink>
              </NavItem> */}
              <NavItem>
                <NavLink className='link-text'>
                  <Link to={paths.imprint} className=' link'>{t('header-Imprint')}</Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className='link-text'>
                  <Link to={paths.newsAndUpdate} className='link-text link'>{t('header-newsUpdate')}</Link>
                  {/* <Link to="/adminbooking" className=' link'>AdminBooking</Link> */}
                </NavLink>
              </NavItem>
              {
                user &&
                <NavItem>
                  <NavLink>
                    <div>
                      <Button
                        sx={{ padding: 0, margin: 0, color: "#000000", textTransform: "none", fontWeight: 500, lineHeight: '20px', fontSize: '15.6592px' }}
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                      >
                        My Account
                      </Button>
                      <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                          'aria-labelledby': 'basic-button',
                        }}
                      >
                        <Link to={paths.driver.driverEditProfile} className='link-text link'><MenuItem onClick={handleClose}>Edit Profile</MenuItem></Link>

                        <Link to={paths.driver.rideDetails} className='link-text link'><MenuItem onClick={handleClose}>My Ride</MenuItem></Link>

                        <Link to={paths.driver.driveVehicle} className='link-text link'><MenuItem onClick={handleClose}>My Vehicle</MenuItem></Link>

                        <Link to={paths.driver.taxValues} className='link-text link'><MenuItem onClick={handleClose}>Tax Report</MenuItem></Link>

                        <Link to={paths.newsAndUpdate} className='link-text link'><MenuItem onClick={handleClose}>Reviews</MenuItem></Link>

                        <Link to={paths.driver.driverTermsCondition} className='link-text link'><MenuItem onClick={handleClose}>Terms & Condition</MenuItem></Link>
                      </Menu>
                    </div>
                  </NavLink>
                </NavItem>
              }
              
            </Nav>
          </Collapse>
          <div className='d-flex align-items-center flex-wrap'>

            {user ? <span className="link pointer text-primary" > {user?.username}</span>
              : <Link to={paths.accounts.login} className="btn btn-outline link px-2" sx={{ padding: "8px", color: "#0E4672" }}>  LogIn</Link>}

            {!user ? <button onClick={handleRegistration} className='btn-primary btn-small'>Registration</button>
              :
              <button onClick={handleLogout} className='btn-primary btn-small'>Logout</button>}


          { !user &&  <Select
              size='small'
              value={dropValue}
              onChange={handleChange}>
              <MenuItem value="Become Partner" disabled>
                Become Partner
              </MenuItem>
              <MenuItem value={"2"}>Business/ Agent</MenuItem>
              <MenuItem value={"3"}>Driver/ Carrier</MenuItem>
            </Select>}
          </div>
          <div className='py-2'>
            <TranslateDropdown style={{ width: "2rem" }} />
          </div>
        </Navbar>

      </div>
    </div>
  );
}


