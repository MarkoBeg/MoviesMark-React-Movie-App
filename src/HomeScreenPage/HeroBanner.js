import React from "react";
import "./HeroBanner.css";

export default function HeroBanner({ img }) {
  return (
    <div
      className="hero-banner-section"
      style={{
        backgroundImage: `url(
            https://images.unsplash.com/photo-1440404653325-ab127d49abc1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)`,
      }}
    >
      <div className="hero-banner-section-info">
        <div className="hero-banner-info-left">
          <h1>MoviesMark provides a lot of great Movies Check it out.</h1>
          <button>MoviesMark</button>
        </div>
        <div className="hero-banner-info-right">
          <h4>Every type movie genre... Provided by MoviesMark</h4>
        </div>
      </div>
    </div>
  );
}
