import React from "react";
import { Switch, Route } from "react-router-dom";
import * as navigation from "../navigation";
import ModaleContainer from "../ModalBox/ModalBox";
import * as pages from "./pages";
const MainContetnt = () => (
  <>
    <ModaleContainer />
    <div className="mainContent">
      {/* <navigation.NavBar /> */}
      <Switch>
        <Route exact path="/">
          <pages.Vendors />
        </Route>
      </Switch>
    </div>
    <navigation.Footer />
  </>
);

export default MainContetnt;
