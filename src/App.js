import "./App.css";
import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { getTotals } from "./redux/action/cartAction";
import LandingPage from "./Components/LandingPage/LandingPage";
import Home from "./Components/Home/Home.jsx";
// import Create from "./Components/Create/Create";
import Nav from "./Components/Nav/Nav"
import HotelDetail from './Components/HotelDetail/HotelDetail.jsx'
import Footer from './Components/Footer/Footer'
import CreateRooms from "./Components/CreateRooms/CreateRooms";
import CreateHotel from "./Components/CreateHotel/CreateHotel";
import CreateEvents from "./Components/CreateEvents/CreateEvents";
import RoomDetail from "./Components/RoomDetail/RoomDetail";
import Favorite from "./Components/Favorite/Favorite";
import CreateServRooms from "./Components/CreateServRooms/CreateServRooms";
import CreateServHotels from "./Components/CreateServHotels/CreateServHotels";
import ModifyServHotels from "./Components/CreateServHotels/ModifiyServHotels";
import ModifyHotel from "./Components/CreateHotel/ModifyHotel";
import ModifyRooms from "./Components/CreateRooms/ModifyRooms";
import ModifyServRooms from "./Components/CreateServRooms/ModifyServiceRooms";
import ModifyEvents from "./Components/CreateEvents/ModifyEvents";
import Stripe from "./Components/Stripe/Stripe";
import Cart from "./Components/Cart/Cart";
import AuthProvider from "./context/AuthContext";
import ProtectedRoute from "./Components/Authentication/ProtectedRoute/ProtectedRoute";
import Login from "./Components/Authentication/Login/Login";
import Register from "./Components/Authentication/Register/Register";
import ProfileUsers from "./Components/Authentication/ProfileUsers/ProfileUsers";
import EditUser from "./Components/Authentication/EditUser/EditUser"
import Events from "./Components/Events/Events";
import UserTable from "./Components/Admin/UserTable/UserTable";
import AdminTable from "./Components/Admin/AdminTable/AdminTable";
import RegisterAdmin from './Components/Admin/RegisterAdmin/RegisterAdmin';
import EditAdmin from './Components/Admin/EditAdmin/EditAdmin';
import ProfileAdmin from './Components/Admin/ProfileAdmin/ProfileAdmin';
import AboutUs from "./Components/AboutUs/About"
import ProfileSuperAdmin from "./Components/SuperAdmin/ProfileSuperAdmin";
import FormsAdmin from "./Components/Admin/FormsAdmin/FormsAdmin";
import FormsSuperAdmin from "./Components/SuperAdmin/FormsSuperAdmin";
import CreateReview from "./Components/CreateReview/CreateReview";
import HistoryBookings from "./Components/Users/HistoryBookings";
import Stock from "./Components/Admin/Stock/Stock";
import Terms from "./Components/Terms/Terms";
import Privacy from "./Components/Privacy/Privacy";

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getTotals())
  }, [dispatch])

  return (
    <div>
      <AuthProvider>
        <Nav />
        <Routes>
          <Route exact path="/terms" element={< Terms />} />
          <Route exact path="/privacy" element={< Privacy />} />
          <Route exact path="/home/Events" element={< Events />} />
          <Route exact path="/home/ModifyHotel" element={< ModifyHotel />} />
          <Route exact path="/home/ModifyRooms" element={<ModifyRooms />} />
          <Route exact path="/home/createServRooms" element={<CreateServRooms />} />
          <Route exact path="/home/modifyServRooms" element={<ModifyServRooms />} />
          <Route exact path="/home/createServHotels" element={<CreateServHotels />} />
          <Route exact path="/home/modifyServHotels" element={<ModifyServHotels />} />
          <Route exact path="/home/createEvents" element={<CreateEvents />} />
          <Route exact path="/home/modifyEvents" element={<ModifyEvents />} />
          <Route exact path="/home/createRooms" element={<CreateRooms />} />
          <Route exact path="/home/createHotels" element={<CreateHotel />} />
          {/* <Route exact path="/home/dashboard" element={<Create />} /> */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path='/hotel/room/:id' element={<RoomDetail />} />
          <Route path='/hotel/:id' element={<HotelDetail />} />
          <Route path='/favorite' element={<Favorite />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/home/stripe' element={<Stripe />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route path="/profileusers" element={<ProfileUsers />} />
          <Route path="/profileusers/EditUser" element={<EditUser/>}/>
          <Route exact path="/admin/admintable" element={<AdminTable />} />
          <Route exact path="/home/dashboard/RegisterAdmin" element={<RegisterAdmin/>} />
          <Route exact path="/profileAdmin" element={<ProfileAdmin/>}/>
          <Route exact path="/profileAdmin/editAdmin" element={<EditAdmin/>} />
          <Route exact path="/admin/usertable" element={<UserTable />} />
          <Route exact path="/profileSuperAdmin" element={<ProfileSuperAdmin/>} />
          <Route exact path="/profileAdmin/formsAdmin" element={<FormsAdmin/>}/>
          <Route exact path="/profileSuperAdmin/formsSuperAdmin" element={<FormsSuperAdmin/>}/>
          <Route exact path="/hotel/:id/review" element={<CreateReview />} />
          <Route path="/user/history" element={<HistoryBookings/>} />
          <Route path="/admin/stock" element={<Stock/>} />
        </Routes>
        <Footer />
      </AuthProvider>
    </div>
  );
}

export default App;