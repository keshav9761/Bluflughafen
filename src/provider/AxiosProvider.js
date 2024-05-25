import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {paths} from '../config/constants';
import {Button, Dialog, DialogActions, DialogTitle} from '@mui/material';
import {useStateValue} from './stateProvider';
import {authService} from '../services/authService';
import { httpRequest } from '../services/httpRequest';

function AxiosProvider() {
    const navigate                = useNavigate();
    const [{user}, dispatch] = useStateValue();
    const [open, setOpen]         = useState(false);
    const [_msg, _setMsg]         = useState('');

    const handleClose = () => {
        if (authService.user()) {
            const _tempData = authService.removeUser();
            dispatch({
                         type: 'SET_USER',
                         user: _tempData,
                     });
            navigate(paths.accounts.login);
        }
    };

    useEffect(() => {
        const authInterceptor = httpRequest.interceptors.request.use(function (config) {
            if (user) {
                config.headers = {'Authorization': 'Bearer ' + user?.accessToken};
            }
            return config;
        });
        return () => {
            httpRequest.interceptors.request.eject(authInterceptor);
        }
    }, [user]); // eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
        httpRequest.interceptors.response.use(function (response) {
            return response;
        }, function (error) {
            if (error.response.status === 401) {
                setTimeout(() => {
                    setOpen(true);
                    _setMsg('Invalid user session, Try to login again');
                }, 100);
            } else {
                return Promise.reject(error);
            }
        });
    }, []);

    return (<>
        <Dialog fullWidth maxWidth={"xs"} open={open} onClose={() => {
            handleClose();
            setOpen(false);
        }} disableEscapeKeyDown={true}>
            <DialogTitle className="text-danger text-center">{_msg}</DialogTitle>
            <DialogActions className="justify-content-center pb-4">
                <Button variant={"contained"} onClick={() => {
                    handleClose();
                    setOpen(false);
                }}>Continue with login</Button>
            </DialogActions>
        </Dialog>
    </>);
}

export default AxiosProvider;