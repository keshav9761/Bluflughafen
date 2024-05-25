import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import CssBaseline from '@mui/material/CssBaseline';
import { Box, Button, Divider, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, MenuItem, Toolbar, Typography, FormControl, Select } from '@mui/material'
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar'
import MenuIcon from '@mui/icons-material/Menu';
import { styled, useTheme } from '@mui/material/styles';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import partnerLogo from '../../Assets/AdminImg/partner.png'
import dashlogo from '../../Assets/AdminImg/Dasboard.png'
import SpeedIcon from '@mui/icons-material/Speed';
import vehiclelogo from '../../Assets/AdminImg/vehicle.png'
import Logo from '../../Assets/Images/logo.png'
import SettingsIcon from '@mui/icons-material/Settings';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import PeopleIcon from '@mui/icons-material/People';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { paths } from '../../config/constants';

const drawerWidth = 240;
const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
  '.toolbar': {
    backgroundColor: "#F5F4F0",

  },
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
  
);

const LinkWrapper = styled(Link)(() => ({
  color: "#CFC4B7",
  fontFamily: 'DM Sans',
  fontStyle: "normal",
  fontWeight: 500,
  fontSize: "16px",
  lineHeight: " 21px",
  textDecoration: 'none'
}))

const SelectWrapper = styled(Select)(() => ({
  color: "white",
  background: "black",
  '&.MuiPopover-paper': {
    color: 'white',
    backgroundColor: "black"
  }
}))


export default function AdminLayout() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [openDrawer, setOpenDrawer] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpenDrawer(true);
  };

  const handleDrawerClose = () => {
    setOpenDrawer(false);
  };

  const [vehicle, setVehicle] = React.useState('vehicle1');

  const handleChangeVehicle = (event) => {
    setVehicle(event.target.value);
  };


  return (
    <>

      <div style={{ backgroundColor: "#F5F4F0" }}>
        <div className='d-flex'>
          <CssBaseline />
          <div>
            <AppBar position="fixed" open={openDrawer}>
              <Toolbar className='toolbar'>
                <IconButton
                  aria-label="open drawer"
                  onClick={handleDrawerOpen}
                  edge="start"
                  sx={{
                    marginRight: 5,
                    ...(openDrawer && { display: 'none' }),
                  }} 
                >
                  <MenuIcon />
                </IconButton>
                <Box display="flex" gap={7} justifyContent="center">
                  <Typography variant="h6" noWrap color="black" fontSize="32px" fontWeight={700}>
                    Dashboard
                  </Typography>
                  <Box display="flex" gap={3} mt={2}>
                    <Box>
                      <LinkWrapper>All Booking</LinkWrapper>
                    </Box>
                    <Box>
                      <LinkWrapper>Admin Booking</LinkWrapper>
                    </Box>
                    <Box>
                      <LinkWrapper>Website Booking</LinkWrapper>
                    </Box>
                  </Box>
                </Box>
              </Toolbar>
            </AppBar>
            <Drawer variant="permanent" open={openDrawer}
              PaperProps={{
                sx: {
                  backgroundColor: "#1A1F23",
                  color: "white",
                  // overflow:"hidden",
                }
              }}
             >
              <DrawerHeader>
                <Box display="flex" mt={1}>
                  <Box p={1}>
                    <img src={Logo} width="100%" height="auto" />
                  </Box>
                  <IconButton onClick={handleDrawerClose} style={{ color: "white" }}>
                    {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                  </IconButton>
                </Box>
              </DrawerHeader>
              <Divider />
              <List>
                <ListItem disablePadding sx={{ display: 'block' }}>
                  <ListItemButton spacing={4}
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? 'initial' : 'center',
                      px: 2.5,
                      color: "white",

                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : 'auto',
                        justifyContent: 'center',
                        color: "white"
                      }}>
                      <SpeedIcon />
                    </ListItemIcon>
                    <ListItemText>
                      {/* <Link to={paths.admin.dashboard}>
                      </Link> */}
                      <Typography sx={{ marginInlineStart: "19px" }}> Dashboard</Typography>
                    </ListItemText>
                  </ListItemButton>

                </ListItem>
                <ListItem disablePadding sx={{ display: 'block' }}>
                  <ListItemButton spacing={4}
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? 'initial' : 'center',
                      px: 2.5,
                      color: "white",

                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : 'auto',
                        justifyContent: 'center',
                        color: "white"
                      }}>
                      <PeopleIcon />
                    </ListItemIcon>
                    <ListItemText>
                      <Link to={paths.admin.userManager} style={{color:"white",textDecoration:"none"}}>
                        <Typography sx={{ marginInlineStart: "19px" }} >User Manager</Typography>
                      </Link> <br/>
                      <Link to={paths.admin.addnewVehicle} style={{color:"white",textDecoration:"none"}}>
                        <Typography sx={{ marginInlineStart: "19px" }} >AddNewVehicle</Typography>
                      </Link> <br/>
                      <Link to={paths.admin.partnerList} style={{color:"white",textDecoration:"none"}}>
                        <Typography sx={{ marginInlineStart: "19px" }} >PartnerList</Typography>
                      </Link> <br/>
                      <Link to={paths.admin.partnerSetup} style={{color:"white",textDecoration:"none"}}>
                        <Typography sx={{ marginInlineStart: "19px" }} >partnerSetup</Typography>
                      </Link>
                    </ListItemText>
                  </ListItemButton>

                </ListItem>
                <ListItem disablePadding sx={{ display: 'block' }}>
                  <ListItemButton spacing={4}
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? 'initial' : 'center',
                      px: 2.5,
                      color: "white",

                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : 'auto',
                        justifyContent: 'center',
                        color: "white"
                      }}>
                      <img src={partnerLogo} width="26px" />
                    </ListItemIcon>
                    <ListItemText>
                      <Typography sx={{ marginInlineStart: "19px" }} >
                        <FormControl fullWidth>
                          <SelectWrapper className='MuiPopover-paper'
                            size='small'
                            value={vehicle}
                            onChange={handleChangeVehicle}
                          >
                            <MenuItem value="vehicle1">Partner </MenuItem>
                            <MenuItem value="vehicle2">vehicle 2</MenuItem>
                            <MenuItem value="vehicle3">vehicle 3</MenuItem>
                            <MenuItem value="vehicle4">vehicle 4</MenuItem>
                          </SelectWrapper>
                        </FormControl>
                      </Typography>
                    </ListItemText>
                  </ListItemButton>

                </ListItem>
              </List>
              <Divider />

              <List >
                <ListItem disablePadding sx={{ display: 'block' }}>
                  <ListItemButton spacing={4}
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? 'initial' : 'center',
                      px: 2.5,
                      color: "white",

                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : 'auto',
                        justifyContent: 'center',
                        color: "white"
                      }}>
                      <img src={vehiclelogo} width="26px" />
                    </ListItemIcon>
                    <ListItemText>
                      <Typography sx={{ marginInlineStart: "19px" }}>
                        <FormControl fullWidth>
                          <SelectWrapper
                            size='small'
                            value={vehicle}
                            onChange={handleChangeVehicle}
                          >
                            <MenuItem value="vehicle1">vehicle </MenuItem>
                            <MenuItem value="vehicle2">vehicle 2</MenuItem>
                            <MenuItem value="vehicle3">vehicle 3</MenuItem>
                            <MenuItem value="vehicle4">vehicle 4</MenuItem>
                          </SelectWrapper>
                        </FormControl>
                      </Typography>
                    </ListItemText>
                  </ListItemButton>

                </ListItem>

                <ListItem disablePadding sx={{ display: 'block' }}>
                  <ListItemButton spacing={4}
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? 'initial' : 'center',
                      px: 2.5,
                      color: "white",

                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : 'auto',
                        justifyContent: 'center',
                        color: "white"
                      }}>
                      <ManageAccountsIcon />
                    </ListItemIcon>
                    <ListItemText>
                      <Typography sx={{ marginInlineStart: "19px" }} >Phone Booking</Typography>
                    </ListItemText>
                  </ListItemButton>

                </ListItem>
                <ListItem disablePadding sx={{ display: 'block' }}>
                  <ListItemButton spacing={4}
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? 'initial' : 'center',
                      px: 2.5,
                      color: "white",

                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : 'auto',
                        justifyContent: 'center',
                        color: "white"
                      }}>
                      <SettingsIcon />
                    </ListItemIcon>
                    <ListItemText>
                      <Typography sx={{ marginInlineStart: "19px" }} >Settings</Typography>
                    </ListItemText>
                  </ListItemButton>

                </ListItem>
              </List>

              <Box sx={{ backgroundColor: "#F14C48", color: "whitesmoke", marginX: "8px", marginTop: "155px" }} borderRadius={1} textAlign="center" minWidth="100px">
                <IconButton>
                  <Button style={{ color: "white", fontWeight: "700", }}><PowerSettingsNewIcon /> Log Out</Button>
                </IconButton>
              </Box>
            </Drawer>
          </div>
          <div style={{ flex: "1" }}>
            <Outlet />
          </div>
        </div>
      </div>
    </>

  )
}
