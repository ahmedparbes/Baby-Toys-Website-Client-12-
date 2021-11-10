import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Main/Home/Home';
import Header from './Shared/Header/Header';
import Footer from './Shared/Footer/Footer';
import AuthProvider from './Context/AuthProvider/AuthProvider';
import BookOrder from './OrderManagment/BookOrder/BookOrder';
import DashBoardHome from './DashBoard/DashBoardHome/DashBoardHome';
import BuyOrder from './OrderManagment/BookOrder/BuyOrder/BuyOrder';
import Payment from './DashBoard/Payment/Payment';
import Rating from './DashBoard/Rating/Rating';
import Service from './Main/Service/Service';
import Register from './Authentication/Register/Register';
import Login from './Authentication/Login/Login';
import BookingList from './DashBoard/Book/BookingList/BookingList';

function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Routes>
            <Route path="/" element={<Home />}>
            </Route>
            <Route path="/pay" element={<Payment />}>
            </Route>
            <Route path="/shop" element={<Service />}>
            </Route>
            <Route path="/rate" element={<Rating />}>
            </Route>
            <Route path="/register" element={<Register />}>
            </Route>
            <Route path="/login" element={<Login />}>
            </Route>
            <Route path="/my-orders" element={<BookingList />}>
            </Route>
            <Route path="/book/:id" element={<BuyOrder />}>
            </Route>
            <Route path="/buy/:id" element={<BookOrder />}>
            </Route>
            <Route path="/dashboard" element={<DashBoardHome />}>
            </Route>

          </Routes>
        </BrowserRouter>
        <Footer></Footer>

      </AuthProvider>
    </div >
  );
}

export default App;
