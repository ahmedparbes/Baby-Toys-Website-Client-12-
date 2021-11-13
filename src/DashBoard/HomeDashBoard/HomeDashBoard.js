import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
} from "react-router-dom";
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import { Button } from '@mui/material';
import AllOrder from '../AllOrder/AllOrder';
import Payment from '../Payment/Payment';
import AddService from '../AddService/AddService';
import BookingList from '../Book/BookingList/BookingList';
import Rating from '../../DashBoard/Rating/Rating'
import useAuth from '../../Context/AuthProvider/useAuth/useAuth';
import Home from '../../Main/Home/Home';
import ManageProduct from '../../OrderManagment/ManageProduct/ManageProduct';
import AdminRoute from '../../Private/AdminRoute/AdminRoute';

const drawerWidth = 240;

function HomeDashboard(props) {

    const { user, admin, handleLogOut } = useAuth()

    let { path, url } = useRouteMatch();
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            <Link style={{ textDecoration: 'none', padding: '6px' }} to="/"><Button variant="text">HomePage</Button></Link>
            <br />

            {
                admin ? <Box>
                    <Link style={{ textDecoration: 'none', padding: '6px' }} to={`${url}/makeAdmin`}><Button variant="text">Make Admin</Button></Link>
                    <br />
                    <Link style={{ textDecoration: 'none', padding: '6px' }} to={`${url}/allOrders`}><Button variant="text">All Orders</Button></Link>
                    <Link style={{ textDecoration: 'none', padding: '6px' }} to={`${url}/add-service`}><Button variant="text">Add Service</Button></Link>
                    <br />

                    <Link style={{ textDecoration: 'none', padding: '6px' }} to={`${url}/manageProduct`}><Button variant="text">Manage All Products</Button></Link>
                </Box> :
                    <Box>
                        <Link style={{ textDecoration: 'none', padding: '6px' }} to={`${url}`}><Button style={{ textDecoration: 'none' }} variant="text">DashBoard</Button></Link>
                        <br />
                        <Link style={{ textDecoration: 'none', padding: '6px' }} to={`${url}/rate`}><Button variant="text">Rate us</Button></Link>
                        <br />


                        <Link style={{ textDecoration: 'none', padding: '6px' }} to={`${url}/pay`}><Button variant="text">Pay Now</Button></Link>

                        <br />
                        <Link style={{ textDecoration: 'none', padding: '6px' }} to={`${url}/my-orders`}><Button variant="text">My Orders</Button></Link>
                        <br />
                    </Box>
            }


            <Divider />
            <Button style={{ marginLeft: '20px', marginTop: '20px' }} onClick={handleLogOut} variant="contained">Logout</Button>

        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        DashBoard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Switch>
                    <Route exact path={path}>
                        <h3>Hello, <span style={{ color: 'violet' }}> {user.displayName}</span> </h3>
                    </Route>
                    <Route exact path={`${path}/`}>
                        <Home></Home>
                    </Route>
                    <AdminRoute path={`${path}/makeAdmin`}>
                        <MakeAdmin></MakeAdmin>
                    </AdminRoute>
                    <AdminRoute path={`${path}/allOrders`}>
                        <AllOrder></AllOrder>
                    </AdminRoute>
                    <Route path={`${path}/rate`}>
                        <Rating></Rating>
                    </Route>
                    <Route path={`${path}/pay`}>
                        <Payment></Payment>
                    </Route>
                    <AdminRoute path={`${path}/add-service`}>
                        <AddService></AddService>
                    </AdminRoute>
                    <Route path={`${path}/my-orders`}>
                        <BookingList></BookingList>
                    </Route>
                    <AdminRoute path={`${path}/manageProduct`}>
                        <ManageProduct></ManageProduct>
                    </AdminRoute>
                </Switch>
            </Box>
        </Box>
    );
}

HomeDashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default HomeDashboard;
