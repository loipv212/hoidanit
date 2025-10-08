import "./App.scss";
import { Button } from "react-bootstrap";
import Headers from "./components/Header/Header";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
  Link,
} from "react-router-dom";
const App = () => {
  return (
    <div className="app-container">
        <div className="header-container">
            <Headers />
        </div>
        <div className="main-container">

        </div>

        <div className="sidenav-container">

        </div>

        <div className="app-content">
          <Outlet />
        </div>
    </div>
  );
};

export default App;
