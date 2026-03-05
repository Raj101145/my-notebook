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
            <div className="card p-3 shadow-sm text-center">
              <h5>🔒 Secure Notes</h5>
              <p>Your notes are encrypted and private.</p>
            </div>
          </div>

          {/* FORM */}
          <div className="col-md-6">
            <div className="card p-4 shadow">
              <form>
                <div className="mb-3">
                  <label className="form-label">Email address</label>
                  <input type="email" className="form-control" />
                </div>

                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input type="password" className="form-control" />
                </div>
                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input border-dark"
                    id="rememberMe"
                  />
                  <label className="form-check-label ms-2" htmlFor="rememberMe">
                    Remember Me
                  </label>
                </div>

                <button className="btn btn-primary">Submit</button>
              </form>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="col-md-3">
            <div className="card p-3 shadow-sm text-center">
              <h5>⚡ Fast Access</h5>
              <p>Access your notes anytime anywhere.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
