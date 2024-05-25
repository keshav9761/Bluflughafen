import React, { useState } from 'react'
import { GoogleLoginButton } from "react-social-login-buttons";
import { FacebookLoginButton } from "react-social-login-buttons";
import {
  LoginSocialGoogle,
  LoginSocialFacebook,
} from 'reactjs-social-login';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { paths } from '../config/constants';
import { FormControl, Input, InputAdornment, InputLabel, TextField, FormHelperText, Button } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import IconButton from '@mui/material/IconButton'
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';


export default function SocialLogin() {
  const navigate = useNavigate();
  // const [token, setTocken] = useState("");
  const [email, setEmail] = useState("");
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [password, setPassword] = useState("");
  const [loginType, setLoginType] = useState("1");
  const [error, setError] = useState("")




  const [gEmail, setGEmail] = useState("");
  const [gPassword, setGPassword] = useState("");
  const [secLoginType, setSecLoginType] = useState("1");
  const [showPassword, setShowPassword] = useState(false);
  const [emailErrorText, setEmailErrorText] = useState();
  const [passwordErrorText, setPasswordErrorText] = useState();
  const [loading, setLoading] = useState(false);




  const [fbEmail, setFbEmail] = useState("");
  const [fbName, setFbName] = useState("");
  const [fbLName, setFbLName] = useState("");

  const handleClickShowPassword = (e) => setShowPassword((show) => !show);
  const handleMouseDownPassword = (e) => {
    e.preventDefault();
  };
  const { t } = useTranslation();

  let obj = {
    fName: fName,
    lName: lName,
    email: email,
    loginType: loginType,
    password: password,
  }

  let gdata = {
    email: gEmail,
    password: gPassword,
    loginType: secLoginType
  }
  const handleLoginEmail = async (event) => {
    event.preventDefault();

    if (validateForm()) {
      setLoading(true)
      try {
        let response = await axios.post(`https://i5y2sl7e13.execute-api.ap-south-1.amazonaws.com/api/auth/userLogin`, gdata)
        // console.log(response?.data.data)
        if (response && response?.data?.msg === "success") {
          sessionStorage.setItem("token", response?.data?.token);
          sessionStorage.setItem("id", response?.data?.data?._id);
          sessionStorage.setItem("role", response?.data?.data?.role);
          sessionStorage.setItem("fName", response?.data?.data?.fName);
          // sessionStorage.setItem("username", response?.data?.data?.username);
          sessionStorage.setItem("email", response?.data?.data?.email);
          console.log(response);
          navigate(paths.home);
        }
      } catch (error) {
        const resErr = error.response.data.msg;
        // console.log(resErr)
        setError(resErr)
        setLoading(false)
      } finally {
       setLoading(false)
      }
    }
  }

  const validateForm = () => {
    let valid = true;

    if (!gEmail) {
      setEmailErrorText("Please enter email");
      valid = false;
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(gEmail)) {
      setEmailErrorText("Please enter valid email");
      valid = false;
    }
    else {
      setEmailErrorText("");
    }

    if (!gPassword) {
      setPasswordErrorText("Please enter password");
      valid = false;
    }
    else {
      setPasswordErrorText("");
    }

    return valid;
  }




  const handleGoogleLogin = async (event) => {
    try {
      let response = await axios.post(`https://i5y2sl7e13.execute-api.ap-south-1.amazonaws.com/api/auth/userLogin`, obj,)
      // console.log(response?.data.data)
      if (response && response?.data?.msg === "success") {
        sessionStorage.setItem("token", response?.data?.token);
        sessionStorage.setItem("id", response?.data?.data?._id);
        sessionStorage.setItem("role", response?.data?.data?.role);
        // sessionStorage.setItem("username", response?.data?.data?.username);
        sessionStorage.setItem("email", response?.data?.data?.email);
        console.log(response);
        navigate(paths.home);
      }
    } catch (error) {
      const resErr = error.response.data.msg;
      // console.log(resErr)
      setError(resErr)
    } finally {
      console.log("successfully login")
    }
  };

let fbObj ={
    fName: fbName,
    lName: fbLName,
    email: fbEmail,
    loginType: loginType,
}

const handleFacebookLogin  = async() => {
  try {
    let response = await axios.post(`https://i5y2sl7e13.execute-api.ap-south-1.amazonaws.com/api/auth/userLogin`, fbObj,)
    // console.log(response?.data.data)
    if (response && response?.data?.msg === "success") {
      sessionStorage.setItem("token", response?.data?.token);
      sessionStorage.setItem("id", response?.data?.data?._id);
      sessionStorage.setItem("role", response?.data?.data?.role);
      // sessionStorage.setItem("username", response?.data?.data?.username);
      sessionStorage.setItem("email", response?.data?.data?.email);
      console.log(response);
      navigate(paths.home);
    }
  } catch (error) {
    const resErr = error.response.data.msg;
    // console.log(resErr)
    setError(resErr)
  } finally {
    console.log("successfully login")
  }
}

if (email && lName && fName !== "") {
  handleGoogleLogin();
} else if (fbEmail && fbName && fbLName !== "") {
  handleFacebookLogin();
}


  return (
    <div className='row justify-content-center vh-100 bg-white py-5'>
      <div className='col-md-6 border rounded-3 p-3'>
        {error && <div className='fs-4 mb-3 text-center text-danger border border-danger' style={{ backgroundColor: "#FFEDEE" }}>{error}</div>}
        <h5 className='fs-4 py-2'>Sign up with</h5>
        <div className='row'>
          <div className='col-6'>
            <LoginSocialGoogle
              client_id={"196778505839-5j5ah7orh77df0q348tgvdnb4h9ggkt2.apps.googleusercontent.com"}
              scope="openid profile email"
              discoveryDocs='"claims_supported'
              access_type='offline'
              onResolve={({ provider, data }) => {
                console.log(data);
                console.log("token", data.access_token)
                setLName("failmy", data.family_name)
                setFName("given", data.given_name)
                setEmail(data.email);
                console.log("name", data.name)
              }}
              onReject={(err) => {
                setError(err);
              }}
            >
              <GoogleLoginButton />
            </LoginSocialGoogle>
          </div>


          {/* first_name last_name */}


          <div className='col-6'>
            <LoginSocialFacebook
              appId="494755362728320"
              onResolve={(response) => {
                // console.log(response.data)
                // console.log("token", response.data.accessToken)
                setFbEmail(response.data.email)
                setFbName(response.data.first_name)
                setFbLName(response.data.last_name)
              }}
              onReject={(error) => {
                setError(error)
              }}
            >

              <FacebookLoginButton />
            </LoginSocialFacebook>
          </div>
        </div>


        <div className='text-center my-2 row'>
          <div className='col-4'><hr /></div>
          <div className='col-4'>
            Or continue with
          </div>
          <div className='col-4'><hr /></div>
        </div>
        <form onSubmit={handleLoginEmail}>
          <div>
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
                onChange={(e) => setGEmail(e.target.value)} />
              <div id="emailHelp" class="form-text">{t('email-hint')}</div>
            </div>

            <div>
              <FormControl sx={{ width: '100%' }} variant="standard" error={passwordErrorText}>
                <InputLabel htmlFor="standard-adornment-password">Password*</InputLabel>
                <Input
                  id="standard-adornment-password"
                  type={showPassword ? 'text' : 'password'}
                  onChange={(e) => setGPassword(e.target.value)}
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
            <div className='my-5 text-center'>
              <LoadingButton type={"submit"} variant="contained"
                loadingPosition="end"
                endIcon={<></>}
                loading={loading}
                fullWidth
                size="large"
                className="text-uppercase px-5"
              // onClick={handleLogin}
              >{t('Login')}</LoadingButton>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
