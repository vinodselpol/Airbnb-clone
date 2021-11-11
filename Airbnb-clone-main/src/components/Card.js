import React from "react";
import "../style/css/Card.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function Card({ src, title, description, price }) {
  //   console.log("srccccccc", src);
  return (
    <div className="card">
      {src.constructor === Array ? (
        <Carousel>
          {src.map(i => (
            <img src={i} alt="img" />
          ))}
        </Carousel>
      ) : (
        <img src={src} alt="img" />
      )}

      <div className="card__info">
        {title ? <h2>{title}</h2> : ""}
        {description ? <h4>{description}</h4> : ""}
        {price ? <h3>{price}</h3> : ""}
      </div>
    </div>
  );
}

export default Card;
