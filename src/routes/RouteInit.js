import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppThemeProvider from '../provider/AppThemeProvider';
import RouteApp from './routeApp';


function RouteInit() {
    return (
        <BrowserRouter>
            <AppThemeProvider>
                <RouteApp />
            </AppThemeProvider>
        </BrowserRouter>
    );
}

export default RouteInit;