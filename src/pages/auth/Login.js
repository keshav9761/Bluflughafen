import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import boy from '../../Assets/Images/Boy.png'
import { Link, useNavigate } from 'react-router-dom';
import { FormControl, Input, InputAdornment, InputLabel, TextField, FormHelperText, Button } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import IconButton from '@mui/material/IconButton'
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { httpRequest } from '../../services/httpRequest';
import { paths } from '../../config/constants';
import { authService } from '../../services/authService';
import { useStateValue } from '../../provider/stateProvider';


export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailErrorText, setEmailErrorText] = useState();
  const [passwordErrorText, setPasswordErrorText] = useState();
  const [loading, setLoading] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [error, setError] = useState("");
  const [{ user }, dispatch] = useStateValue();

  // let role =user?.role;
  // console.log("role",role)

  // let username =user?.username;
  // console.log("username",username)
  useEffect(() => {
    if (localStorage.checkbox && localStorage.email !== "") {
      setIsChecked(true);
      setEmail(localStorage.username);
      setPassword(localStorage.password);
    }
  }, []);

  const navigate = useNavigate()

  useEffect(() => {
    // const navPage = sessionStorage.getItem("role");
    if (user?.role === "3") {
      navigate(paths.driver.rideDetails)
    } else if (user?.role === "2") {
      navigate(paths.home)
    }
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const onChangeCheckbox = (event) => {
    setIsChecked(event.target.checked);
  };


  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const { t } = useTranslation();

  const validateForm = () => {
    let valid = true;

    if (!email) {
      setEmailErrorText("Please enter email");
      valid = false;
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      setEmailErrorText("Please enter valid email");
      valid = false;
    }
    else {
      setEmailErrorText("");
    }

    if (!password) {
      setPasswordErrorText("Please enter password");
      valid = false;
    }
    else {
      setPasswordErrorText("");
    }

    return valid;
  }
  let obj = {
    email: email,
    password: password
  }

  // let bodyFormData = new FormData()
  // bodyFormData.append('email', userName);
  // bodyFormData.append('password', password);

  // console.log(process.env.REACT_APP_URL)

  // let data = JSON.stringify(obj);
  // console.log(bodyFormData)
  const handleLogin = async (event) => {
    event.preventDefault();

    if (validateForm()) {
      setLoading(true)
      if (isChecked && email !== "") {
        localStorage.username = email;
        localStorage.password = password;
        localStorage.checkbox = isChecked;
      }
      try {
        let response = await httpRequest.post(`https://i5y2sl7e13.execute-api.ap-south-1.amazonaws.com/api/auth/login`, obj,)
        console.log(response?.data.data)
        if (response && response?.data?.msg === "success") {
          localStorage.setItem("flugafen", JSON.stringify(response?.data));
          const _tempData = authService.user();
          dispatch({
            type: 'SET_USER',
            user: _tempData,
          });

          if (response?.data?.data?.role === 2) {
            navigate(paths.businessAgent.home);
          }
          else if (response?.data?.data?.role === 3)
            navigate(paths.driver.rideDetails);
        }
      } catch (error) {
        // alert("Email or Password does not match. Please login again");
        // console.log(error);
        // if (error.response.data?.status === 401) {
        const resErr = error.response.data.msg;
        // console.log(errorVa)
        setError(resErr)
        // Object.entries(_error).forEach(([key, value]) => {
        //     _validate[key].error   = true;
        //     _validate[key].message = value;
        // });
        // _setFormValidate(_validate);
        // }
      } finally {
        setLoading(false);
      }
    }
  }


  return (
    <>
      <div className='container-fluid' style={{ background: "#C7E7F1", paddingBottom: "5%" }}>
        <div className='row px-3'>

          <div className="col col-md-7 white-card rounded p-5 my-4 h-50">
            <form>
              <h2>{t('CustomerLogin')}</h2>
              {/* <p className='p'>{t('para-graph')}</p> */}
              <p className='p'>Join us! And enjoy your ride in just simple steps.</p>
              {error && <div className='fs-4 mb-3 text-center text-danger border border-danger' style={{ backgroundColor: "#FFEDEE" }}>{error}</div>}
              <div class="mb-3">
                <TextField
                  label={t("E-Mail Address*")}
                  type="email"
                  variant='standard'
                  fullWidth
                  autoComplete='off'
                  error={emailErrorText}
                  helperText={emailErrorText}
                  name="email"
                  value={email}
                  onChange={handleChange} />
                <div id="emailHelp" class="form-text">{t('email-hint')}</div>
              </div>
              <div class="mb-3">
                {/* <TextField type="password" label="password" variant='standard' fullWidth autoComplete='off' /> */}
                <FormControl sx={{ width: '100%' }} variant="standard" error={passwordErrorText}>
                  <InputLabel htmlFor="standard-adornment-password">{t('Password*')}</InputLabel>
                  <Input
                    id="standard-adornment-password"
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    value={password}
                    onChange={handleChange}
                    endAdornment={
                      <InputAdornment >
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}

                        >
                          {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                  <FormHelperText id="my-helper-text">{passwordErrorText}</FormHelperText>
                </FormControl>
              </div>
              <div class="mb-3 form-check d-flex justify-content-between">
                <div>
                  <input type="checkbox"
                    checked={isChecked}
                    name="lsRememberMe"
                    onChange={onChangeCheckbox}
                    class="form-check-input" id="exampleCheck1" />
                  <label class="form-check-label" for="exampleCheck1">{t('EMich')}</label>
                </div>
                <div>
                  <Link to={paths.accounts.forgetPassword}>{t('Forget Password')}</Link>
                </div>
              </div>
              {/* <button type="submit" class=" btn-primary w-100">{t('submit')}</button> */}
              <LoadingButton type={"submit"} variant="contained"
                loadingPosition="end"
                endIcon={<></>}
                loading={loading}
                fullWidth
                size="large"
                className="text-uppercase"
                onClick={handleLogin}
              >{t('Login')}</LoadingButton> <br /><br />
              <center>
                <p> {t('Notamemberyet?')} <Link to={paths.accounts.driverRegister}>{t('joinnow')}</Link></p>
              </center>
            </form>
            <div className='text-center'>
              <Button variant='outlined' size="large" className='text-capitalize text-dark' color='success' onClick={() => navigate(paths.accounts.socialLogin)}>Don't have an account? </Button>
            </div>
          </div>

          <div className="col col-md-5 my-4 align-center" style={{ placeContent: "center", display: "grid" }}>
            <img src={boy} height="430rem" width="380rem" />
          </div>

        </div>

      </div>

    </>)

}
