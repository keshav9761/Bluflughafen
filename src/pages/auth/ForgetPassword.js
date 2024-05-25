import { Visibility, VisibilityOff } from '@mui/icons-material'
import { useTranslation } from 'react-i18next';
import { LoadingButton } from '@mui/lab'
import { FormControl, Grid, IconButton, InputAdornment, InputLabel, TextField } from '@mui/material'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import boy from '../../Assets/Images/Boy.png'
import { Input } from 'reactstrap';
import { paths } from '../../config/constants';


export default function ForgetPassword() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [newPass, setNewPass] = useState("");
    const [conNewPass, setConNewPass] = useState("");
    
    const [emailErrorText, setEmailErrorText] = useState("");
    const [passwordErrorText, setPasswordErrorText] = useState("");
    const [newPassErrorText, setNewPassErrorText] = useState("");
    const [conNewPassErrorText, setConNewPassErrorText] = useState("");
    
    const [loading, setLoading] = useState(false);
    
    const [showPassword, setShowPassword] = useState(false);
    
    const navigate = useNavigate();
    
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


        if (!newPass) {
            setNewPassErrorText("Please enter email");
            valid = false;
        }
        else {
            setNewPassErrorText("");
        }

        if (!conNewPass) {
            setConNewPassErrorText("Please enter password");
            valid = false;
        }
        else if (conNewPass !== newPass) {
            setConNewPassErrorText("New Password and Confirm New Password does not Match.");
        }
        else {
            setConNewPassErrorText("");
        }

        return valid;
    }
    let obj = {
        email: email,
        password: password,
        newPass: newPass,
        newConfirmPass: conNewPass
    }

    const handleReset = (e) => {
        e.preventDefault();
        setLoading(true)
        validateForm();
        if (validateForm()) {
            console.log(obj)
            setLoading(false)
            navigate(paths.accounts.login)
        }
        else {
            setLoading(false)
        }
    }


    return (
        <>
            <div className='container-fluid' style={{ background: "#C7E7F1", paddingBottom: "5%" }}>
                <div className='row px-3'>

                    <div className="col col-md-7 white-card rounded p-5 my-4 h-50">
                        <form onSubmit={handleReset} noValidate>
                            <div className='text-center'> <h2>Reset password</h2></div>
                            <div class="mb-3">
                                <TextField
                                    label="E-Mail Address*"
                                    type="email"
                                    variant='standard'
                                    fullWidth
                                    autoComplete='off'
                                    onChange={(e) => setEmail(e.target.value)}
                                    error={!!emailErrorText}
                                    helperText={emailErrorText}
                                />
                            </div>
                            <div class="mb-3">
                                <TextField
                                    label="Password* "
                                    type="password"
                                    variant='standard'
                                    fullWidth
                                    autoComplete='off'
                                    onChange={(e) => setPassword(e.target.value)}
                                    error={!!passwordErrorText}
                                    helperText={passwordErrorText} />
                            </div>
                            <div class="mb-3">
                                <TextField
                                    label="New Password*"
                                    type="password"
                                    variant='standard'
                                    fullWidth
                                    autoComplete='off'
                                    onChange={(e) => setNewPass(e.target.value)}
                                    error={!!newPassErrorText}
                                    helperText={newPassErrorText} />
                            </div>
                            <div class="mb-3">
                                <TextField
                                    label="New Confirm Password*"
                                    type="password"
                                    variant='standard'
                                    fullWidth
                                    autoComplete='off'
                                    onChange={(e) => setConNewPass(e.target.value)}
                                    error={!!conNewPassErrorText}
                                    helperText={conNewPassErrorText} />
                            </div>
                            <div class="mb-3">

                            </div>
                            <LoadingButton variant="contained"
                                loadingPosition="end"
                                endIcon={<></>}
                                fullWidth
                                size="large"
                                className="text-uppercase"
                                loading={loading}
                                type="submit"
                            >Reset Password</LoadingButton>

                        </form>
                    </div>

                    <div className="col col-md-5 my-4 align-center" style={{ placeContent: "center", display: "grid" }}>
                        <img src={boy} height="430rem" width="380rem" />
                    </div>

                </div>

            </div>


        </>)
}


