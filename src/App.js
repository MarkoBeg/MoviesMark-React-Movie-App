import React from "react";
import "./App.css";
import LoginPage from "./HomeScreenPage/loginPage";
import HomeNav from "./HomeScreenPage/HomeNav";
import MoviesBanner from "./MoviesFolder/MoviesBanner";
import MovieRows from "./MoviesFolder/MovieRows";
import Footer from "./HomeScreenPage/Footer";
import { useEffect } from "react";
import { login, logout, selectUser } from "./features/userSlice";
import { useSelector, useDispatch } from "react-redux";
import { auth } from "./firebase";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((newUser) => {
      if (newUser) {
        dispatch(
          login({
            email: newUser.email,
            uid: newUser.uid,
            displayName: newUser.displayName,
          })
        );
      } else {
        dispatch(logout);
      }
    });
  }, [dispatch]);

  return (
    <>
      <div className="App">
        {user ? (
          <div className="movies-page">
            <HomeNav></HomeNav>
            <MoviesBanner></MoviesBanner>
            <MovieRows></MovieRows>
            <Footer></Footer>
          </div>
        ) : (
          <div className="login-page">
            <LoginPage></LoginPage>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
