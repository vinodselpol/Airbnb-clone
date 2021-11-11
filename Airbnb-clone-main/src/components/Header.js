import React from "react";
import "../style/css/Header.css";
import SearchIcon from "@material-ui/icons/Search";

import MenuIcon from "@material-ui/icons/Menu";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import LanguageIcon from "@material-ui/icons/Language";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <div className="icon__container">
        <Link to="/">
          <img
            className="header__icon"
            src="https://miro.medium.com/max/2678/0*NChTo-XqLOxLabIW"
            alt="logo"
          />
        </Link>
      </div>
      <div className="middle__container">
        <input type="text" className="header__search" />
        <SearchIcon className="header__SearchIcon" />
      </div>
      <div className="header__right">
        <h4> Become a host </h4>
        <div className="header__rightCenter">
          <LanguageIcon />
          <KeyboardArrowDownIcon />
        </div>
        <div className="header__rightRight">
          <MenuIcon />
          <AccountCircleIcon />
        </div>
      </div>
    </div>
  );
}

export default Header;
