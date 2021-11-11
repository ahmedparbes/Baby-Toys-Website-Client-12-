import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';
import Home from './Main/Home/Home';
import Header from './Shared/Header/Header';
import Footer from './Shared/Footer/Footer';
import AuthProvider from './Context/AuthProvider/AuthProvider';
import DashBoardHome from './DashBoard/DashBoardHome/DashBoardHome';
import Payment from './DashBoard/Payment/Payment';
import Rating from './DashBoard/Rating/Rating';
import Service from './Main/Service/Service';
import Register from './Authentication/Register/Register';
import Login from './Authentication/Login/Login';
import BookingList from './DashBoard/Book/BookingList/BookingList';
import AddService from './DashBoard/AddService/AddService';
import BookOrder from './OrderManagment/BookOrder/BookOrder';
import BuyOrder from './OrderManagment/BuyOrder/BuyOrder';
import PrivateRoute from './Private/PrivateRoute';
import OrderStatusUpdate from './OrderManagment/OrderStatusUpdate/OrderStatusUpdate';
import AllOrders from './DashBoard/AllOrder/AllOrder'
import MakeAdmin from './DashBoard/MakeAdmin/MakeAdmin';
import AdminRoute from './Private/AdminRoute/AdminRoute';

function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>

            <PrivateRoute path="/pay">
              <Payment></Payment>
            </PrivateRoute>

            <Route path="/shop">
              <Service></Service>
            </Route>
            <AdminRoute path="/makeAdmin">
              <MakeAdmin></MakeAdmin>
            </AdminRoute>

            <PrivateRoute path="/rate">
              <Rating></Rating>
            </PrivateRoute>

            <AdminRoute path="/add-service">
              <AddService></AddService>
            </AdminRoute>

            <Route path="/register">
              <Register></Register>
            </Route>

            <Route path="/login">
              <Login></Login>
            </Route>

            <PrivateRoute path="/my-orders">
              <BookingList></BookingList>
            </PrivateRoute>

            <Route path="/book/:id">
              <BuyOrder></BuyOrder>
            </Route>

            <PrivateRoute path="/buy/:id" >
              <BookOrder></BookOrder>
            </PrivateRoute>

            <Route path="/update/:id" >
              <OrderStatusUpdate></OrderStatusUpdate>
            </Route>

            <AdminRoute path="/allOrders" >
              <AllOrders></AllOrders>
            </AdminRoute>

            <PrivateRoute path="/dashboard" >
              <DashBoardHome></DashBoardHome>
            </PrivateRoute>


          </Switch>
        </BrowserRouter>
        <Footer></Footer>

      </AuthProvider>
    </div >
  );
}

export default App;
