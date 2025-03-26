import React from "react";
import Header from "./Header";
import { useState } from "react";

const Login = () => {

const [isSignInForm, setIsSignInForm] = useState(true);
const toggleSignInForm = () => {
  setIsSignInForm(!isSignInForm);
}

  return (
    <div className="w-full h-screen">
      <Header />
      <div className="w-full h-screen object-cover">
        <img
          className="w-full h-screen object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/50fcc930-ba3f-4cae-9257-9f920e30a998/web/IN-en-20250310-TRIFECTA-perspective_739387a0-ff14-44ed-a5af-36e5aa4d236e_large.jpg"
          alt="Background"
        />
      </div>
      <form className="absolute top-52 mx-auto left-0 right-0 p-8 w-1/4 bg-black/70 text-white rounded-lg">
        <h1 className="text-2xl font-bold mb-4 text-center">{isSignInForm ?  "SIGN IN" : "SIGNUP"}</h1>
        <div>
          {!isSignInForm && <input className="w-full p-2 mb-3 bg-gray-800 rounded" type="text" placeholder="Name" />}
          <input
            className="w-full p-2 mb-3 bg-gray-800 rounded"
            type="text"
            placeholder="Email"
          />
          <input
            className="w-full p-2 mb-3 bg-gray-800 rounded"
            type="password"
            placeholder="Password"
          />
          <button className="w-full bg-red-600 p-2 mt-6 mb-6 rounded">
            {isSignInForm ? "SignIn" : "SignUp"}
          </button>
        </div>
        <p className="mt-4 text-center">
          New to NetflixGPT?{" "}
          <span className="text-red-500 cursor-pointer" onClick={toggleSignInForm}>{isSignInForm ? "Sign Up Now" : "Already Registered? Sign In Now"}</span>
        </p>
      </form>
    </div>
  );
};
export default Login;
