import React from "react";
import "./App.css";
import { Nav } from "./Components/Nav";
import { Route } from "react-router-dom";
import About from "./Pages/AboutPage";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import landingPage from "./Pages/LandingPage";
import { useAuth0 } from "@auth0/auth0-react";
import { setBearer } from "./axios";
import { resetBearer } from "./axios";
function App() {
  //NOTE If the user is authenticated the beraer token will be set in axios and sent with all
  //requests.If they are not authenticated the token will be set to "".
  const { isAuthenticated, getAccessTokenSilently } = useAuth0();
  if (isAuthenticated) {
    try {
      (async () => setBearer("Bearer " + (await getAccessTokenSilently())))();
    } catch (error) {
      console.error(error);
    }
  } else {
    resetBearer();
  }
  return (
    <div className="">
      <Nav />
      <Route path="/" exact component={landingPage} />
      <Route path="/profile" exact component={Profile} />
      <Route path="/about" exact component={About} />
      <Route path="/home" exact component={Home} />
    </div>
  );
}

export default App;
