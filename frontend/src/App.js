import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
// import * as spotActions from "./store/spots";
import Navigation from "./components/Navigation";
import LoginFormPage from "./components/LoginFormPage";
import Landing from "./components/LandingFormPage/LandingPage";
import Listings from "./components/SpotsPage/Spot";
import CreateSpot from "./components/SpotsPage/CreateSpot";
// import Spot from "./components/SpotsPage/Spot";
import SpotProfile from "./components/SpotsPage/SpotProfile";
import ConfirmDelete from "./components/SpotsPage/ConfirmDelete";
import SignupFormModal from "./components/SignupFormPage/modal";
// import SpotForm from "./components/SpotsPage/SpotForm";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
    // dispatch(spotActions.fetchSpots());
  }, [dispatch]);

  return (
    <>
      <div className="app">
        <Navigation isLoaded={isLoaded} />
      </div>
      {isLoaded && (
        <Switch>
          <Route exact path='/'><Landing /></Route>
          <Route path="/signup"><SignupFormModal /></Route>
          <Route path="/login"><LoginFormPage /></Route>
          {/* <Route path="/profile"><h2>Profile</h2></Route> */}
          <Route path="/listings"><h2>Listings</h2><Listings /></Route>
          <Route path="/listing/:id"><h2>Listing</h2><SpotProfile /></Route>
          {/* <Route path="/add-spot"><CreateSpot /></Route> */}
          <Route path="/confirmDelete"><ConfirmDelete /></Route>
          <Route path="*"><h2>Page Not Found</h2></Route>
        </Switch>
      )}
    </>
  );
}

export default App;
