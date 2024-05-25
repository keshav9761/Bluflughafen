import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import i18n from "./i18n/i18n";
import './index.css';
import { I18nextProvider } from "react-i18next";
import RouteInit from './routes/RouteInit';
import { StateProvider } from './provider/stateProvider';
import StateReducerService,  {initialState} from './services/stateReducerService';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
    <StateProvider initialState={initialState} reducer={StateReducerService}><RouteInit/></StateProvider>
      {/* <RouteInit /> */}
    </I18nextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
