import { Link } from "react-router-dom";
import Notes from "../components/notes";

function Home() {
  return (
    <div>
      <div className="container mt-5">

        <h1 className="text-center fw-bold mb-5">
          Create the notes no one can read
        </h1>

        <div className="row align-items-center">

          {/* LEFT SIDE */}
          <div className="col-md-3">
            <div className="side-panel">
              <h4>🔒 Secure Notes</h4>
              <p>Your notes are encrypted and private.</p>
              <hr />
              <p>✔ End-to-end privacy</p>
              <p>✔ Secure authentication</p>
              <p>✔ Private storage</p>
            </div>
          </div>

          {/* CENTER FORM */}
          <div className="col-md-6">
            <div className="card shadow p-4 auth-card">
              <h4 className="mb-3">Start Your Secure Notebook</h4>

              <p className="text-muted">
                Login or create an account to manage your encrypted notes.
              </p>

              <div className="d-flex justify-content-center gap-3 mt-3">
                <Link to="/login" className="btn btn-primary px-5">
                  Login
                </Link>

                <Link to="/signup" className="btn btn-outline-primary px-5">
                  Sign Up
                </Link>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="col-md-3">
            <div className="side-panel">
              <h4>⚡ Fast Access</h4>

              <p>
                Access your notes anytime from any device.
              </p>

              <hr />

              <p>✔ Instant note creation</p>
              <p>✔ Organized dashboard</p>
              <p>✔ Secure authentication</p>
            </div>
          </div>

        </div>

        {/* NOTES SECTION */}
        <div className="mt-5">
          <Notes />
        </div>

      </div>
    </div>
  );
}

export default Home;