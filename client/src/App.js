import React , { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";
import EventList from "./components/EventList";
import ErrorPage from "./components/ErrorPage";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <div>
        {isLoggedIn && <NavBar onLogout={handleLogout}/>}
        
        <Switch>
          <Route path="/" exact>
            {!isLoggedIn ? (<LoginForm onLogin={handleLogin} />) : (<EventList />)}
          </Route>
          <Route path="/login" exact>
            {!isLoggedIn ? (<LoginForm onLogin={handleLogin} />) : (<EventList />)}
          </Route>
          <Route path="/signup" exact component={SignupForm} />
          <Route path="*" component={ErrorPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
