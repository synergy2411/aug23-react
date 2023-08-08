import { NavLink } from "react-router-dom";

export default function MainNavigation() {
  return (
    <header>
      <nav className="navbar navbar-expand">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/posts" className="nav-link">
              Posts
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
