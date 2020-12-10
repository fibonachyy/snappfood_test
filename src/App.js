import React from "react";
import { Provider } from "react-redux";
import store from "./store/store";
import { BrowserRouter as Router } from "react-router-dom";
import History from "./history/history";
import MainContetnt from "./component/Router";
import "./app.scss";

function App() {
  return (
    <React.Fragment>
      <Provider store={store}>
        <Router history={History}>
          <MainContetnt />
        </Router>
      </Provider>
    </React.Fragment>
  );
}

export default App;
