import React from 'react'

import { Routes, Route } from "react-router-dom";
import Home from "app/pages/Home";
import Login from 'pages/Login';
import PrivateRoutes from "routes/PrivateRoutes";
import HotelReservation from 'app/components/ReservationComponent';
import HotelDetails from 'app/pages/HotelDetails';
import HotelDetailsProvider from 'app/providers/HotelDetailsProvider';

const RouterComponent = () => {
  return (
    <Routes>
      <Route element={<PrivateRoutes />}>
        <Route element={<Home />} path="/home" />
        <Route element={<HotelReservation />} path="/test" />

        <Route
          element={
            <HotelDetailsProvider>
              <HotelDetails />
            </HotelDetailsProvider>
          }
          path="/hotel/:id"
        />
      </Route>
      <Route element={<Login />} path="/login" />
    </Routes>
  );
}

export default RouterComponent