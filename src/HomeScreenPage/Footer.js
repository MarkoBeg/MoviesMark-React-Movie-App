import React from "react";

export default function Footer() {
  return (
    <div
      style={{
        backgroundColor: "var(--main-color)",
        padding: "25px",
        textAlign: "center",
      }}
    >
      <p
        style={{
          fontFamily: "Poppins",
          color: "#fff",
          fontSize: "24px",
        }}
      >
        All rights reserved by MoviesMark{" "}
        <span
          style={{
            fontFamily: "Lato",
            fontWeight: "400",
            fontSize: "22px",
          }}
        >
          {new Date().getFullYear()}
        </span>
      </p>
    </div>
  );
}
