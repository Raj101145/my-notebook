import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    email: "",
    password: ""
  });

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/");
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(credentials)
      });

      const json = await response.json();

      console.log("Login response:", json);

      if (json.authToken) {

        localStorage.setItem("token", json.authToken);

        navigate("/");

      } else {
        alert("Invalid credentials");
      }

    } catch (error) {

      console.error("Login error:", error);
      alert("Server error. Try again.");

    }
  };

  const onChange = (e) => {

    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });

  };

  return (

    <div className="container mt-5">

      <h4 className="text-center mb-4">Login Page</h4>

      <form onSubmit={handleSubmit}>

        <div className="mb-3">

          <label className="form-label">Email</label>

          <input
            type="email"
            name="email"
            className="form-control"
            value={credentials.email}
            onChange={onChange}
            required
          />

        </div>

        <div className="mb-3">

          <label className="form-label">Password</label>

          <input
            type="password"
            name="password"
            className="form-control"
            value={credentials.password}
            onChange={onChange}
            required
          />

        </div>

        <button type="submit" className="btn btn-primary w-100">
          Login
        </button>

      </form>

      <p className="mt-3 text-center">
        Don't have an account? <Link to="/signup">Signup</Link>
      </p>

    </div>

  );
}

export default Login;