import React from "react";

function About() {
  return (
    <div className="container mt-5">

      <h1 className="text-center mb-4">About iNotebook</h1>

      <p className="text-center text-muted mb-5">
        iNotebook is a secure note-taking application built with the MERN stack
        that allows users to create, manage, and organize their personal notes safely.
      </p>

      <div className="row">

        {/* Feature 1 */}
        <div className="col-md-4">
          <div className="card shadow-sm p-3 mb-4">
            <h4>🔒 Secure Authentication</h4>
            <p>
              User accounts are protected using JWT authentication ensuring
              only authorized users can access their notes.
            </p>
          </div>
        </div>

        {/* Feature 2 */}
        <div className="col-md-4">
          <div className="card shadow-sm p-3 mb-4">
            <h4>📝 Create & Manage Notes</h4>
            <p>
              Users can easily create, update, and delete notes with a simple
              and intuitive interface.
            </p>
          </div>
        </div>

        {/* Feature 3 */}
        <div className="col-md-4">
          <div className="card shadow-sm p-3 mb-4">
            <h4>⚡ Fast & Responsive</h4>
            <p>
              Built with React and Express for a fast and smooth user
              experience across devices.
            </p>
          </div>
        </div>

      </div>

      <hr className="my-5" />

      <h3 className="text-center mb-4">Technology Stack</h3>

      <div className="row text-center">

        <div className="col-md-3">
          <div className="card p-3 shadow-sm">
            <h5>React</h5>
            <p>Frontend UI</p>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card p-3 shadow-sm">
            <h5>Node.js</h5>
            <p>Backend Runtime</p>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card p-3 shadow-sm">
            <h5>Express</h5>
            <p>API Framework</p>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card p-3 shadow-sm">
            <h5>MongoDB</h5>
            <p>Database</p>
          </div>
        </div>

      </div>

      <div className="text-center mt-5 text-muted">
        <p>© 2026 iNotebook | Secure Note Management System</p>
      </div>

    </div>
  );
}

export default About;