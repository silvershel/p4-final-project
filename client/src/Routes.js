import React from "react";
import Login from "./components/Login";
import Signup from "./components/Signup";

const routes = [
    {
        path: "/login",
        element: <Login />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/signup",
        element: <Signup />,
        errorElement: <ErrorPage />,
    }
];
  
  export default routes;