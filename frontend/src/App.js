import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import * as spotActions from "./store/spots";
import Navigation from "./components/Navigation";
import LoginFormPage from "./components/LoginFormPage";
import Landing from "./components/LandingFormPage/LandingPage";
import { Listings } from "./components/SpotsPage/Spot";
import CreateSpot from "./components/SpotsPage/CreateSpot";
import DeleteSpot from "./components/SpotsPage/DeleteSpot";
import Spot from "./components/SpotsPage/Spot";


function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
    dispatch(spotActions.fetchSpots());
  }, [dispatch]);

  return (
    <>
      <div className="app">
        <Navigation isLoaded={isLoaded} />
      </div>
      {isLoaded && (
        <Switch>
          <Route exact path='/'><Landing /></Route>
          <Route path="/signup"><SignupFormPage /><h2>Sign Up</h2></Route>
          <Route path="/login"><LoginFormPage /><h2>Login</h2></Route>
          <Route path="/profile"><h2>Profile</h2></Route>
          <Route path="/listings"><h2>Listings</h2><Spot /><Listings /><CreateSpot /></Route>
          <Route path="/listing/:id"><h2>Listing</h2></Route>
          <Route path="/add-spot"><CreateSpot /></Route>
          <Route path="*"><h2>Page Not Found</h2></Route>
        </Switch>
      )}
    </>
  );
}

export default App;
