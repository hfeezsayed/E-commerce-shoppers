import React from "react";
import "./LoginSignUp.css";

const LoginSignUp = () => {
  return (
    <div className="loginsignup">
      <div className="container py-5">
        <div className="loginsignup-field my-5">
          <div className="col-md-5 form-block mx-auto">
            <h1 className="text-center">Sign up</h1>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                type="name"
                className="form-control"
                placeholder="name..."
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="email..."
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="password..."
              />
            </div>
            <div className="mb-3 form-btn">
              <button className="btn btn-dark">Continue</button>
              <p className="loginsignup-login mt-3">
                Already have an account?
                <span> Login here</span>
              </p>
              <div className="loginsignup-agree">
                <input type="checkbox" name="" id="" />
                <p>
                  By continuing, i agree to the terms of use & privacy policy
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSignUp;
