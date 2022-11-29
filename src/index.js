import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MainCompnent from "./components/MainCompnent/MainCompnent";
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import FullWeatherInformation from './components/FullInformation';

const App = () => {
  let routes = useRoutes([
    { path: "/", element: <MainCompnent /> },
    { path: "/full-information", element: <FullWeatherInformation /> },
  ]);
  return routes;
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router basename="/">
      <App />
    </Router>
  </React.StrictMode>
);

reportWebVitals();
