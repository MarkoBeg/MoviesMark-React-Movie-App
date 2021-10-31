import React from "react";
import "./Login.css";
import { auth } from "../firebase";
import { useState } from "react";
import { useDispatch } from "react-redux";
import login from "../features/userSlice";

export default function Login() {
  const dispatch = useDispatch();

  const logInToApp = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((newUser) => {
        dispatch(
          login({
            email: newUser.user.email,
            uid: newUser.user.uid,
            displayName: newUser.user.displayName,
          })
        );
      })
      .catch((error) => console.log(error.message));
  };

  const registerUser = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((newUser) => {
        newUser.user
          .updateProfile({
            displayName: name,
          })
          .then(() => {
            dispatch(
              login({
                displayName: name,
                uid: newUser.user.uid,
                email: newUser.user.email,
                password: newUser.user.password,
              })
            );
          });
      })
      .catch((error) => console.log(error.message));
  };
  console.log(registerUser);

  console.log(logInToApp);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="login">
      <div className="login-section">
        <form>
          <input
            type="name"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="login-btn" onClick={logInToApp}>
            Login
          </button>
          <span className="register-btn" onClick={registerUser}>
            Register
          </span>
        </form>
      </div>
    </div>
  );
}
