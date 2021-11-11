import React from "react";
import "../style/css/SearchResult.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import StarIcon from "@material-ui/icons/Star";

function SearchResult({
  src,
  location,
  description,
  title,
  star,
  price,
  total
}) {
  return (
    <div className="searchresult">
      {src.constructor === Array ? (
        <Carousel className="searchresult__carousal">
          {src.map((img, i) => (
            <img src={img} key={i} alt="img" className="searchresult__img" />
          ))}
        </Carousel>
      ) : (
        <img src={src} alt="img" />
      )}
      <FavoriteBorderIcon className="serachresult__heart" />
      <div className="searresult__info">
        <div className="searchresult__infoTop">
          <p>{location}</p>
          <h3>{title}</h3>
          <p>___</p>
          <p className="description">{description}</p>
        </div>
        <div className="searchresult__infoBottom">
          <div className="searhresult__stars">
            <StarIcon className="searchresult__star" />
            <p>{star}</p>
          </div>
          <div className="searchresult__price">
            <h2>{price}</h2>
            <p>{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchResult;
