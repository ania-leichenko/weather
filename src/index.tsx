import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import MainCompnent from "./components/MainCompnent/MainCompnent";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import FullWeatherInformation from "./components/FullInformation/FullInformation";
import { store } from "./store/store";
import { Provider } from "react-redux";

const App = () => {
  let routes = useRoutes([
    { path: "/", element: <MainCompnent /> },
    { path: "/full-information", element: <FullWeatherInformation /> },
  ]);
  return routes;
};

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router basename="/">
        <App />
      </Router>
    </Provider>
  </React.StrictMode>
);
