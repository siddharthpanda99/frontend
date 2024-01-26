import React, { useEffect, useState } from "react";
import Logo from "../../assets/react.svg";
import Input from "../../components/Input";
import { useUserContext } from "../../hooks/useUserContext";
import usePost from "../../hooks/services/usePost";
import { useNavigate } from "react-router-dom";
import { Checkbox } from "@mui/material";
import { Typography } from "@mui/material";

const Login = () => {
  const { user, setUser, updateUser } = useUserContext();
  // const [accepted, setAccepted] = useState(false);
  const navigate = useNavigate();

  const { postData, data, error, loading } = usePost("/login");

  // Check once the data comes from login api
  useEffect(() => {
    // console.log("🚀 ~ useEffect ~ data:", data)
    if (data && data?.token) {
      // console.log("🚀 ~ useEffect ~ token:", data.token)
      setUser({
        ...user, // Copy the old fields
        token: data?.token, // But override this one
        loggedIn: true,
        acceptedPolicy: true,
      });
    }
  }, [data]);

  // Check if user loggedIn inside context, if yes, store it to localstorage for future logins
  useEffect(() => {
    if (user?.loggedIn) {
      // localStorage.setItem("user", JSON.stringify(user));
      // console.log("🚀 ~ useEffect ~ userSSSSS:", user);
      navigate("/home");
    }
  }, [user?.loggedIn]);

  const handleAcceptPolicy = () => {
    updateUser("acceptedPolicy", !user?.acceptedPolicy);
  };

  const handleLogin = (e) => {
    // Check if data exists in localstorage
    if (!user?.username) {
      alert("Please enter username");
    } else if (!user?.password) {
      alert("Please enter password");
    }
    if (!user.loggedIn) {
      postData({ username: user?.username, password: user?.password });
    } else navigate("/home");
  };

  return (
    <div
      style={{
        textAlign: "left",
        maxWidth: 400,
        border: "1px solid #fff",
        borderRadius: 10,
        maxHeight: "500px",
        margin: "auto",
        padding: 20,
      }}
    >
      <img src={Logo} className="logo react" alt="React logo" />
      <h3>Hello there, Sign in to continue</h3>
      <div>
        <div>
          <Input
            type="text"
            label="Username"
            value={user?.username}
            onChange={(e) => {
              console.log("Cghanginh", e.target.value);
              updateUser("username", e.target.value);
            }}
          />
          <Input
            label="Password"
            type="password"
            value={user?.password}
            onChange={(e) => updateUser("password", e.target?.value)}
          />
          <div style={{ display: "flex", width: "100%" }}>
            <Checkbox
              checked={user?.acceptedPolicy}
              onChange={handleAcceptPolicy}
            />
            <Typography>
              By creating or logging into an account, you are agreeing with our
              <b>Terms and Conditions</b> and <b>Privacy Policies</b>
            </Typography>
          </div>
          <button
            style={{ display: "block", marginTop: 10, width: "100%" }}
            onClick={handleLogin}
            disabled={!user?.acceptedPolicy}
          >
            Login
          </button>
          {data?.error || error ? <p>{data?.error}</p> : null}
          {data?.token ? <p>User Logged in Successfully</p> : null}
        </div>
      </div>
    </div>
  );
};

export default Login;
