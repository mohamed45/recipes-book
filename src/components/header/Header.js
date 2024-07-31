import React from "react";
import "./Header.css";
import logoImage from "../../assets/images/logo2.png"

const Header = () => {
  return (
    <header className="header-container">
      <img src={logoImage} alt="Logo" className="logo" />
      <div className="title">Recipe Book</div>
    </header>
  );
};

export default Header;
