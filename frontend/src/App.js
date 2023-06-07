import React from "react";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import Navigation from "./components/Navigation";
import SignupFormPage from "./components/SignupFormPage";
import BusinessIndex from "./components/Business/BusinessIndex";
import BusinessShow from "./components/Business/BusinessShow";
import ReviewFormPage from "./components/Reviews/ReviewForm";
import UpdateFormPage from "./components/Reviews/UpdateForm";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <>
      <Navigation />
        <Switch>
          <Route exact path="/businesses" component={BusinessIndex} />
          <Route exact path="/businesses/:businessId" component={BusinessShow} />
          <Route exact path="/login" >
            <LoginFormPage />
          </Route>
          <Route exact path="/signup">
            <SignupFormPage />
          </Route>
          <Route exact path="/businesses/:businessId/write-a-review">
            <ReviewFormPage />
          </Route>
          <Route exact path="/businesses/:businessId/update-review/:reviewId">
            <UpdateFormPage />
          </Route>
        </Switch>
      <Footer />
    </>
  );
}

export default App;