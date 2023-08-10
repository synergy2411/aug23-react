import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userRegisterAction } from "../store/slices/auth.slice";

export default function Auth() {
  const { token, isLoading, errMessage } = useSelector((store) => store.auth);

  const dispatch = useDispatch();

  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);

  const registerHandler = (e) => {
    e.preventDefault();
    let newUser = {
      email: emailInputRef.current.value,
      password: passwordInputRef.current.value,
    };
    dispatch(userRegisterAction(newUser));
  };

  const loginHandler = () => {};

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
                <input
                  type="text"
                  name="email"
                  className="form-control"
                  ref={emailInputRef}
                />
              </div>
              {/* password */}
              <div className="form-group mb-4">
                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  ref={passwordInputRef}
                />
              </div>
              {/* buttons */}
              <div className="row">
                <div className="col-6">
                  <div className="d-grid">
                    <button
                      className="btn btn-secondary"
                      onClick={registerHandler}
                      disabled={isLoading}
                    >
                      {isLoading ? "Submitting..." : "Register"}
                    </button>
                  </div>
                </div>
                <div className="col-6">
                  {token && (
                    <div className="d-grid">
                      <button
                        className="btn btn-primary"
                        onClick={loginHandler}
                      >
                        Login
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
