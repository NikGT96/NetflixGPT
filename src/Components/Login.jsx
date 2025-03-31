import React, { useRef } from "react";
import Header from "./Header";
import { useState } from "react";
import { checkValidation } from "../Utils/validate";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Utils/firebase";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [message, setMessage] = useState(null);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleLogin = () => {
    // console.log(name.current.value);
    // console.log(email.current.value);
    // console.log(password.current.value);
    const validation = checkValidation(
      isSignInForm,
      !isSignInForm ? name.current.value : null,
      email.current.value,
      password.current.value
    );
    setMessage(validation);
    if (!validation) {
      if (!isSignInForm) {
        createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
          .then((userCredential) => {
            // Signed up
            const user = userCredential.user;
            console.log(user);
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode + " " + errorMessage)
            setMessage(errorCode + " " + errorMessage)
            // ..
          });
      } else {
        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user);
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode + " " + errorMessage)
          });
      }
    }
  };

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
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute top-52 mx-auto left-0 right-0 p-8 w-1/4 bg-black/70 text-white rounded-lg"
      >
        <h1 className="text-2xl font-bold mb-4 text-center">
          {isSignInForm ? "SIGN IN" : "SIGNUP"}
        </h1>
        <div>
          {!isSignInForm && (
            <input
              ref={name}
              className="w-full p-2 mb-3 bg-gray-800 rounded"
              type="text"
              placeholder="Name"
            />
          )}

          <input
            ref={email}
            className="w-full p-2 mb-3 bg-gray-800 rounded"
            type="text"
            placeholder="Email"
          />
          <input
            ref={password}
            className="w-full p-2 mb-3 bg-gray-800 rounded"
            type="password"
            placeholder="Password"
          />
          <p>{message}</p>
          <button
            onClick={handleLogin}
            className="w-full bg-red-600 p-2 mt-6 mb-6 rounded cursor-pointer"
          >
            {isSignInForm ? "SignIn" : "SignUp"}
          </button>
        </div>
        <p className="mt-4 text-center">
          New to NetflixGPT?{" "}
          <span
            className="text-red-500 cursor-pointer"
            onClick={toggleSignInForm}
          >
            {isSignInForm ? "Sign Up Now" : "Already Registered? Sign In Now"}
          </span>
        </p>
      </form>
    </div>
  );
};
export default Login;
