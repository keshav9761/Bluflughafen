import React from 'react';
import {createTheme, ThemeProvider} from "@mui/material";


const theme = createTheme({
                              palette: {
                                  primary: {
                                      main: '#0E4672',
                                      contrastText: '#ffffff'
                                  },
                                  secondary: {
                                      main: '#0d6a91',
                                      contrastText: '#ffffff'
                                  },
                                  action: {
                                      disabled: '#ffffff',
                                  }
                              },
                              typography: {
                                  fontFamily: 'Open Sans, sans-serif',
                                  button: {
                                      textTransform: 'none',
                                  }
                              },
                            //   components: {
                            //       MuiButtonBase: {
                            //           defaultProps: {
                            //               disableRipple: true,
                            //           }
                            //       },
                            //       MuiOutlinedInput: {
                            //           defaultProps: {
                            //               style: {fontSize: '18px'}
                            //           }
                            //       },
                            //       MuiInputLabel: {
                            //           defaultProps: {
                            //               style: {fontSize: '18px'}
                            //           },
                            //           variants: [
                            //               {
                            //                   props: {},
                            //                   style: {
                            //                       color: '#888888',
                            //                       opacity: 0.8
                            //                   },
                            //               },
                            //               {
                            //                   props: {shrink: true},
                            //                   style: {
                            //                       color: '#153848',
                            //                       opacity: 1,
                            //                       fontSize: '18px'
                            //                   }
                            //               }
                            //           ]
                            //       },
                                //   MuiFormHelperText: {
                                //       styleOverrides: {
                                //           root: {
                                //               margin: 0
                                //           }
                                //       }
                                //   }
                            //   }
                          });

function AppThemeProvider({children}) {
    return (<ThemeProvider theme={theme}>{children}</ThemeProvider>);
}

export default AppThemeProvider;