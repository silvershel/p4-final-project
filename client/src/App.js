import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Event from "./components/Event";
import EventEdit from "./components/EventEdit";
import EventList from "./components/EventList";
import EventView from "./components/EventView";
import Profile from "./components/Profile";
import ProfileEdit from "./components/ProfileEdit";
import ProfileView from "./components/ProfileView";
import ErrorPage from "./components/ErrorPage";

function App() {
  return (
    <div>
      <ErrorPage />
      <EventList />
      <Event />
      <EventEdit />
      <EventView />
      <Profile />
      <ProfileEdit />
      <ProfileView />
    </div>

    // <Router>
    //   <Switch>
    //     <Route path="/" exact component={LoginForm} />
    //     <Route path="/login" exact component={Login} />
    //     <Route path="/signup" exact component={Signup} />
    //     <Route path="*" component={ErrorPage} />
    //   </Switch>
    // </Router>

  )
}

export default App;
