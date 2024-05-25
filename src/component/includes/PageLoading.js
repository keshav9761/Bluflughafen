import React, {memo} from 'react';
import {CircularProgress} from '@mui/material';


export const PageLoading = memo(({visible = true}) => {

    if (!visible) {
        return null;
    }

    return (
        <div className="d-flex justify-content-center align-items-center" style={{minHeight: '10rem'}}>
            <CircularProgress color="secondary"/>
        </div>
    )
})