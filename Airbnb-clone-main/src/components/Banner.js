import React, { useState } from "react";
import "../style/css/Banner.css";
import { Button } from "@material-ui/core";
import Search from "./Search";
import { Link } from "react-router-dom";

function Banner() {
  const [showSearch, setShowSearch] = useState(false);
  return (
    <div className="banner">
      <div className="banner__search">
        {showSearch && <Search />}
        <Button
          className="banner__searchButton"
          onClick={() => setShowSearch(!showSearch)}
        >
          {showSearch ? "Hide Dates" : "Search Dates"}
        </Button>
      </div>
      <div className="banner__info">
        <span>Go Near</span>
        <Link to="/search">Explore Nearby Stays</Link>
      </div>
    </div>
  );
}

export default Banner;
