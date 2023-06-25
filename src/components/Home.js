import React from "react";

import "./LandingPage/dist/style.css";

import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="body">
      <div className="section--1">
        <div className="section wrapper">
          <div className="hero">
            <div className="hero__left">
              <h2 className="hero__left-heading">
                See and hear with your own heart.
              </h2>
              <p>Lean back and enjoy the show.</p>
              <Link to="/categories">
                <button className="button button--cta">Shop now</button>
              </Link>
            </div>
            <div className="hero__right"></div>
          </div>
        </div>
      </div>
      <div className="section--2">
        <div className="section wrapper">
          <h2 className="section--2__header">What's in the mix?</h2>
          <div className="section--2__cards">
            <Link to="/headphones">
              <div className="section--2__cards card">
                <div className="img img--1"></div>
                <p>Headphones</p>
              </div>
            </Link>
            <Link to="/speakers">
              <div className="section--2__cards card">
                <div className="img img--2"></div>
                <p>Speakers</p>
              </div>
            </Link>
            <Link to="/artworks">
              <div className="section--2__cards card">
                <div className="img img--3"></div>
                <p>Artworks</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="section--3">
        <div className="section wrapper">
          <p className="big">
            The role of the designer is that of a very good, thoughtful host
            anticipating the needs of his guests.
          </p>
          <p className="author">— Charles Eames</p>
        </div>
      </div>
      <div className="section--4">
        <div className="section wrapper">
          <div className="cta">
            <div className="cta__textBox">
              <p className="cta__textBox-big">The time is now!</p>
              <p className="cta__textBox-small">Shop our premium prodcts.</p>
            </div>
            <Link to="/categories">
              <button className="button button--cta button--cta--transparent">
                Shop now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
