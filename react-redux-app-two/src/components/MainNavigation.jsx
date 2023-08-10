import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { userLogout } from "../store/slices/auth.slice";

export default function MainNavigation() {
  const dispatch = useDispatch();

  const { token, isLoading } = useSelector((store) => store.auth);
  return (
    <header>
      <div className="row">
        <div className="col-8">
          <nav className="navbar navbar-expand">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink to="/" className="nav-link">
                  Login/Register
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/counter" className="nav-link">
                  Counter App
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
        {token && (
          <div className="col-4">
            <div className="d-grid">
              <button
                className="btn btn-outline-danger"
                onClick={() => dispatch(userLogout())}
              >
                {isLoading ? "Logging out..." : "Logout"}
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
