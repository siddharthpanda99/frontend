import React from 'react'

import { Routes, Route } from "react-router-dom";
import Home from "components/Home";
import Login from 'pages/Login';
import PrivateRoutes from "routes/PrivateRoutes";

const RouterComponent = () => {
  return (
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route element={<Home />} path="/home" />
          <Route element={(<h1>Hello</h1>)} path="/test" />
        </Route>
        <Route element={<Login />} path="/login" />
      </Routes>
  );
}

export default RouterComponent