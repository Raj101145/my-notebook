import { useState } from "react";
import { useNavigate } from "react-router-dom";


function Signup() {

  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:5000/api/auth/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(credentials)
    });

    const json = await response.json();
      console.log("Signup response:", json); 

    if (json.authToken) {
      localStorage.setItem("token", json.authToken);
      navigate("/");
    } else {
      alert("Signup failed");
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
      <h2>Create an Account</h2>

      <form onSubmit={handleSubmit}>

        <div className="mb-3">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            id="name"
            value={credentials.name}
            onChange={onChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            id="email"
            value={credentials.email} 
            onChange={onChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            id="password"
            value={credentials.password}
            onChange={onChange}
            required
            minLength={5}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Sign Up
        </button>

      </form>
       <p className="mt-3">
       Don't have an account? Signup<a href="/login">login</a>
      </p>
    </div>
  );
}

export default Signup;