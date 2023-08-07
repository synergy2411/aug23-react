import { useState, useRef } from "react";
import classes from "./Login.module.css";

const Login = () => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [usernameisBlurred, setUsernameIsBlurred] = useState(false);

  const passwordInputRef = useRef();

  const usernameChangeHandler = (e) => setEnteredUsername(e.target.value);

  const usernameBlurHandler = () => setUsernameIsBlurred(true);

  let usernameIsInvalid = enteredUsername.trim() === "";
  let usernameIsBlurAndInvalid = usernameisBlurred && usernameIsInvalid;

  const myClass = usernameIsBlurAndInvalid ? classes["invalid"] : "";

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Username : ", enteredUsername);
    console.log("Password : ", passwordInputRef.current.value);
  };

  return (
    <>
      <h1> Login Component</h1>
      <div className="row">
        <div className="col-6 offset-3">
          <div className="card">
            <div className="card-body">
              <form onSubmit={submitHandler}>
                {/* controlled */}
                <div className="form-group mb-4">
                  <label htmlFor="username">Username :</label>
                  <input
                    type="text"
                    name="username"
                    className={`form-control ${myClass}`}
                    value={enteredUsername}
                    onChange={usernameChangeHandler}
                    onBlur={usernameBlurHandler}
                  />
                  {usernameIsBlurAndInvalid && (
                    <p className="alert alert-danger mb-4">
                      Some problem with username
                    </p>
                  )}
                </div>
                {/* uncontrolled */}
                <div className="form-group mb-4">
                  <label htmlFor="password">Password :</label>
                  <input
                    type="text"
                    name="password"
                    className="form-control"
                    ref={passwordInputRef}
                  />
                </div>
                {/* button */}
                <div className="form-group">
                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={usernameIsInvalid}
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
