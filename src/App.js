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

function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}>
            </Route>
            <Route path="/" element={<Home />}>
            </Route>
            <Route path="/book/:id" element={<BookOrder />}>
            </Route>
            <Route path="/dashboard" element={<DashBoardHome />}>
            </Route>

          </Routes>
        </BrowserRouter>

      </AuthProvider>
    </div >
  );
}

export default App;
