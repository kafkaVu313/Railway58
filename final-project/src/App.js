import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Profile from './components/Profile';

import { Link, Route, Routes } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import CartList from "./components/cart-list.component";

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <Link to="/" className="navbar-brand">Railway58</Link>
        <Link to="/profile" className="navbar-brand">
          Profile
        </Link>
        <Link to="/list-product" className="navbar-brand">
          Product List
        </Link>
        <div className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link to="/login" className="nav-link">
              Login
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/register" className="nav-link">
              Sign Up
            </Link>
          </li>
        </div>
      </nav>

      <div className="container mt-3">
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Signup />} />
          <Route path="profile" element={<Profile />} />
          <Route path="list-product" element={<CartList />} />
        </Routes>
      </div>

    </div>
  );
}

export default App;
