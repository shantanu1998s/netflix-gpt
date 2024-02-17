import React, { useRef, useState } from "react";
import { validateData } from "../../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../../utils/redux/userSlice";

const Login = () => {
  const dispatch = useDispatch();
  const [toggle, setToggle] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const cpassword = useRef(null);

  function handleClick() {
    const message = validateData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;

    if (toggle) {
      //sing  Up

      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
          })
            .then(() => {
              const { uid, displayName, email } = auth.currentUser;
              dispatch(
                addUser({ uid: uid, displayName: displayName, email: email })
              );
              // Profile updated!
              // ...
            })
            .catch((error) => {
              // An error occurred
              // ...
            });
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });
    } else {
      //sing In

      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
    }
  }

  function handleToggle() {
    setToggle(!toggle);
  }

  return (
    <div className=" text-white w-[30%] bg-black opacity-90 h-[90%] py-2 rounded-md">
      <form
        className=" flex items-center w-[100%] h-[100%] flex-col my-5"
        onSubmit={(e) => e.preventDefault()}
      >
        <h1 className="self-start ml-6 font-bold text-2xl mb-8 ">
          {toggle ? "Sign Up" : "Sign In"}
        </h1>
        {toggle ? (
          <input
            ref={name}
            className="bg-gray-700 rounded-sm py-3 px-5  w-[95%]"
            type="text"
            placeholder="Name"
          ></input>
        ) : (
          ""
        )}

        <input
          ref={email}
          className="bg-gray-700 rounded-sm py-3 mt-4 px-5  w-[95%]"
          type="email"
          placeholder=" Email"
        ></input>

        <input
          ref={password}
          className=" bg-gray-700 rounded-sm  mt-4 py-3 px-5 w-[95%]"
          type="password"
          placeholder=" password"
        ></input>
        {toggle ? (
          <input
            ref={cpassword}
            className=" bg-gray-700 rounded-sm  mt-4 py-3 px-5 w-[95%]"
            type="password"
            placeholder="Confirm password"
          ></input>
        ) : (
          ""
        )}

        <p className="self-start ml-3 mt-1">{errorMessage}</p>
        <button
          className="rounded-sm mt-3 py-2 px-6 w-[95%] bg-red-600 "
          type="button"
          onClick={handleClick}
        >
          {toggle ? "Sign Up" : "Sign In"}
        </button>
        <p className="mt-4 w-[95%]">
          {toggle ? " Already Account?" : "New to Netflix"}
          <span className="text-blue-500" onClick={handleToggle}>
            {toggle ? " Sign In" : " Sign up now."}
          </span>
        </p>
        <p className="mt-4  w-[95%]">
          {`This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.`}
        </p>
      </form>
    </div>
  );
};

export default Login;
