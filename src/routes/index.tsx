import React from 'react'

import { Routes, Route, Navigate } from "react-router-dom";
import Home from "app/pages/Home";
import Login from 'pages/Login';
import PrivateRoutes from "routes/PrivateRoutes";
import BookingsList from 'app/components/BookingsList';
import NotFound from 'app/pages/NotFound';
import HotelDetails from 'app/pages/HotelDetails';
import HotelDetailsProvider from 'app/providers/HotelDetailsProvider';

const RouterComponent = () => {
  return (
    <Routes>
      <Route element={<PrivateRoutes />}>
        <Route element={<Home />} path="/home" />
        <Route element={<BookingsList />} path="/bookings" />

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

      <Route path="/404" element={<NotFound />} />
      <Route path="*" element={<Navigate replace to="/404" />} />
    </Routes>
  );
}

export default RouterComponent