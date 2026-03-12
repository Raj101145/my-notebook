import { Link } from "react-router-dom";
import Notes from "../components/Notes";

function Home() {

  if (!localStorage.getItem("token")) {

    return (

      <div className="container mt-5">

        {/* NEW HERO SECTION */}

        <div className="text-center mb-5">

          <h1 className="display-5 fw-bold mb-3">
            Your Private Digital Notebook
          </h1>

          <p className="lead text-muted">
            Write, organize, and protect your personal notes in one secure place.
          </p>

        </div>

        <div className="row align-items-center">

          {/* LEFT */}
          <div className="col-md-3">
            <div className="side-panel">
              <h4>🔒 Secure Notes</h4>
              <p>Your notes are encrypted and private.</p>
            </div>
          </div>

          {/* CENTER */}
          <div className="col-md-6">
            <div className="card shadow p-4 auth-card">

              <h4 className="mb-3">Start Your Secure Notebook</h4>

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

          {/* RIGHT */}
          <div className="col-md-3">
            <div className="side-panel">
              <h4>⚡ Fast Access</h4>
              <p>Access your notes anytime.</p>
            </div>
          </div>

        </div>

      </div>

    );
  }

  return <Notes />;

}

export default Home;