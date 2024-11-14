import React , { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import NavBar from "./components/NavBar";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";
import EventList from "./components/EventList";
import Profile from "./components/Profile";
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
            {!isLoggedIn ? (<LoginForm onLogin={handleLogin} />) : <Redirect to="/events" />}
          </Route>
          <Route path="/signup" exact component={SignupForm} />
          <Route path="/profile" exact component={Profile}>
            {isLoggedIn ? <Profile /> : <Redirect to="/login" />}
          </Route>
          <Route path="/events" exact component={EventList}>
            {isLoggedIn ? <EventList /> : <Redirect to="/login" />}
          </Route>
          <Route path="*" component={ErrorPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
