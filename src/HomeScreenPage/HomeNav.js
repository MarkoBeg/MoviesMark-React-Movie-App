import React from "react";
import LanguageIcon from "@mui/icons-material/Language";
import "./HomeNav.css";
import { useState, useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import { useSelector, useDispatch } from "react-redux";
import { selectUser, logout } from "../features/userSlice";

export default function HomeNav({ displayBtns }) {
  const [scroll, setScroll] = useState(false);

  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const logOutFromApp = () => {
    dispatch(logout());
  };

  const navScroll = () => {
    if (window.scrollY > 60) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", navScroll);
    return () => {
      window.removeEventListener("scroll", navScroll);
    };
  }, []);

  return (
    <div className={scroll ? "home-nav-section" : "home-nav-scroll"}>
      <div className="home-nav-logo">
        <h1>MoviesMark</h1>
      </div>
      {!displayBtns ? (
        <Avatar
          style={{
            cursor: "pointer",
            border: "1px solid var(--main-color)",
            backgroundColor: "var(--main-color)",
            color: "#fff",
          }}
          onClick={logOutFromApp}
        >
          {user.displayName[0]}
        </Avatar>
      ) : (
        <div className="home-nav-buttons">
          <LanguageIcon></LanguageIcon>
          <select>
            <option>🎬English</option>
            <option>🎬Croatian</option>
          </select>
          <button className="home-nav-button">MoviesMark</button>
        </div>
      )}
    </div>
  );
}
