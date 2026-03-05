import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">

        <Link className="navbar-brand" to="/">iNotebook</Link>

        <ul className="navbar-nav ms-auto">

          <li className="nav-item">
            <Link className="nav-link text-white" to="/">Home</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link text-white" to="/about">About</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link text-white" to="/login">Login</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link text-white" to="/signup">Signup</Link>
          </li>

        </ul>
      </div>
    </nav>
  );
};

export default Navbar;