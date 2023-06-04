import React from "react";
import { Route, Switch } from "react-router-dom";
// import SignupFormPage from "./components/SignupFormPage";
import LoginFormPage from "./components/LoginFormPage";
import Navigation from "./components/Navigation";
import SignupFormPage from "./components/SignupFormPage";
import BusinessIndex from "./components/Business/BusinessIndex";
import BusinessShow from "./components/Business/BusinessShow";
import Carousel from "./components/SplashPage/Carousel";

function App() {
  return (
    <>
      <Navigation />
      <Route exact path="/" element={<Carousel />}></Route>
        <Switch>
          {/* <Route exact path="/" element={<Carousel />}></Route> */}
          <Route exact path="/businesses" component={BusinessIndex} />
          <Route path="/businesses/:businessId" component={BusinessShow} />
          <Route exact path="/login" >
            <LoginFormPage />
          </Route>
          <Route exact path="/signup">
            <SignupFormPage />
          </Route>
        </Switch>
    </>
  );
}

export default App;