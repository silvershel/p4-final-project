import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import LoginForm from "../components/LoginForm";
import NavBar from "../components/NavBar";
import SignupForm from "../components/SignupForm";

function App() {
  return (
    <div>
      <NavBar />
      <SignupForm />
    </div>
  );
}

export default App;
