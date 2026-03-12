import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary px-4">

      <Link className="navbar-brand" to="/">iNotebook</Link>

      <ul className="navbar-nav ms-auto">

        <li className="nav-item">
          <Link className="nav-link text-white" to="/">Home</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link text-white" to="/about">About</Link>
        </li>

        {!localStorage.getItem("token") && (
          <>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/login">Login</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-white" to="/signup">Signup</Link>
            </li>
          </>
        )}

        {localStorage.getItem("token") && (
          <li className="nav-item">
            <button onClick={handleLogout} className="btn btn-light ms-3">
              Logout
            </button>
          </li>
        )}

      </ul>

    </nav>
  );
};

export default Navbar;