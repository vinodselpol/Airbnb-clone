import React from "react";
import "../style/css/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__container">
        <div className="container">
          <section className="section__1">
            <h2 className="footer__heading">About</h2>
            <ul className="footer__contents">
              <li className="footer__listElements">
                <a href="/" className="footer__link">
                  How Airbnb works
                </a>
              </li>
              <li className="footer__listElements">
                <a href="/" className="footer__link">
                  Newsroom
                </a>
              </li>
              <li className="footer__listElements">
                <a href="/" className="footer__link">
                  Airbnb Plus
                </a>
              </li>
              <li className="footer__listElements">
                <a href="/" className="footer__link">
                  Airbnb Luxe
                </a>
              </li>
              <li className="footer__listElements">
                <a href="/" className="footer__link">
                  HotelTonight
                </a>
              </li>
              <li className="footer__listElements">
                <a href="/" className="footer__link">
                  Airbnb for Work
                </a>
              </li>
              <li className="footer__listElements">
                <a href="/" className="footer__link">
                  Olympics
                </a>
              </li>
              <li className="footer__listElements">
                <a href="/" className="footer__link">
                  Careers
                </a>
              </li>
            </ul>
          </section>

          <section className="section__1">
            <h2 className="footer__heading">Host</h2>
            <ul className="footer__contents">
              <li className="footer__listElements">
                <a href="/" className="footer__link">
                  Host your home
                </a>
              </li>
              <li className="footer__listElements">
                <a href="/" className="footer__link">
                  Host an online experience
                </a>
              </li>
              <li className="footer__listElements">
                <a href="/" className="footer__link">
                  Host your experience
                </a>
              </li>
              <li className="footer__listElements">
                <a href="/" className="footer__link">
                  Responsible hosting
                </a>
              </li>
              <li className="footer__listElements">
                <a href="/" className="footer__link">
                  Open homes
                </a>
              </li>
              <li className="footer__listElements">
                <a href="/" className="footer__link">
                  Resource center
                </a>
              </li>
              <li className="footer__listElements">
                <a href="/" className="footer__link">
                  Community center
                </a>
              </li>
            </ul>
          </section>

          <section className="section__1">
            <h2 className="footer__heading">Support</h2>
            <ul className="footer__contents">
              <li className="footer__listElements">
                <a href="/" className="footer__link">
                  Our COVID-19 response
                </a>
              </li>
              <li className="footer__listElements">
                <a href="/" className="footer__link">
                  Help Center
                </a>
              </li>
              <li className="footer__listElements">
                <a href="/" className="footer__link">
                  Cancellation Options
                </a>
              </li>
              <li className="footer__listElements">
                <a href="/" className="footer__link">
                  Neighbourhood support
                </a>
              </li>
              <li className="footer__listElements">
                <a href="/" className="footer__link">
                  Trust and safety
                </a>
              </li>
            </ul>
          </section>

          <section className="section__2">
            <span> © 2020, All rights reserved</span>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Footer;
