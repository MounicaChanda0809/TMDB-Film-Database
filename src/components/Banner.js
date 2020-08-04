import React from "react";
import "./styles/Banner.css";
function Banner({ appTitle }) {
  return (
    <header className="banner">
      <div className="banner__content">
        <h1 className="banner__title">{appTitle}</h1>
      </div>
      <div className="banner__fadeBottom"></div>
    </header>
  );
}

export default Banner;
