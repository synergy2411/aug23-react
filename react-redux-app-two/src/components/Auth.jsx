import React from "react";

export default function Auth() {
  return (
    <div className="row">
      <div className="col-6 offset-3">
        <div className="card">
          <div className="card-body">
            <h4 className="text-center">User Registration Form</h4>
            <form>
              {/* email */}
              <div className="form-group mb-4">
                <label htmlFor="email">Email : </label>
                <input type="text" name="email" className="form-control" />
              </div>
              {/* password */}
              <div className="form-group mb-4">
                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                />
              </div>
              {/* buttons */}
              <div className="row">
                <div className="col-6">
                  <div className="d-grid">
                    <button className="btn btn-secondary">Register</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
