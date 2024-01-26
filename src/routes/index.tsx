import React from 'react'

import { Routes, Route } from "react-router-dom";
import Home from "components/Home";
import Login from 'pages/Login';
import PrivateRoutes from "routes/PrivateRoutes";
import HotelReservation from 'app/components/ReservationComponent';
import HotelDetails from 'app/pages/HotelDetails';

const RouterComponent = () => {
  return (
    <Routes>
      <Route element={<PrivateRoutes />}>
        <Route element={<Home />} path="/home" />
        <Route element={<HotelReservation />} path="/test" />
        <Route element={<HotelDetails />} path="/hotel/:id" />
      </Route>
      <Route element={<Login />} path="/login" />
    </Routes>
  );
}

export default RouterComponent