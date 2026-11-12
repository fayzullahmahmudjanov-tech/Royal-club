
import React from "react";
import "./index.css";

function App() {
  return (
    <div className="website">
      {/* NAVIGATION */}
      <header className="navbar">
        <a href="#home" className="brand">
          <span className="wing-logo">♛</span>
          <span>EMPIRE<span className="blue"> CLUB</span></span>
        </a>

        <nav>
          <a href="#home">Home</a>
          <a href="#prices">Prices</a>
          <a href="#about">About</a>
          <a href="#location">Location</a>
        </nav>

        <a href="#location" className="nav-button">
          Visit us
        </a>
      </header>

      {/* HERO SECTION */}
      <section className="hero" id="home">
        <div className="hero-content">
          <p className="small-title">WELCOME TO THE NEXT LEVEL</p>

          <h1>
            ENTER THE
            <br />
            <span>EMPIRE</span>
          </h1>

          <p className="hero-description">
            Experience gaming like never before.
            Powerful computers, comfortable gaming
            zones and an unforgettable atmosphere.
          </p>

          <div className="hero-buttons">
            <a href="#prices" className="primary-button">
              View Prices
            </a>

            <a href="#location" className="secondary-button">
              Find Us
            </a>
          </div>
        </div>

        <div className="hero-decoration">
          <div className="glow-circle">
            <div className="logo-large">♛</div>
            <p>EMPIRE CLUB</p>
            <span>RULE YOUR GAME</span>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="features" id="about">
        <div className="section-heading">
          <p>WHY CHOOSE US</p>
          <h2>MORE THAN JUST GAMING</h2>
        </div>

        <div className="feature-grid">
          <div className="feature-card">
            <div className="feature-icon">🖥️</div>
            <h3>Powerful PCs</h3>
            <p>
              Enjoy smooth gameplay and powerful
              gaming computers.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🎧</div>
            <h3>Gaming Atmosphere</h3>
            <p>
              Comfortable equipment and an
              immersive gaming environment.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🏆</div>
            <h3>Play Together</h3>
            <p>
              Challenge your friends and enjoy
              competitive gaming.
            </p>
          </div>
        </div>
      </section>

      {/* PRICES */}
      <section className="prices" id="prices">
        <div className="section-heading">
          <p>SIMPLE AND CLEAR</p>
          <h2>OUR PRICES</h2>
          <span>Choose your gaming time.</span>
        </div>

        <div className="price-grid">
          <div className="price-card">
            <h3>1 HOUR</h3>
            <div className="price">XX XXX <small>UZS</small></div>
            <p>Perfect for a quick gaming session.</p>
          </div>

          <div className="price-card popular">
            <div className="popular-label">POPULAR</div>
            <h3>3 HOURS</h3>
            <div className="price">XX XXX <small>UZS</small></div>
            <p>More time, more fun.</p>
          </div>

          <div className="price-card">
            <h3>5 HOURS</h3>
            <div className="price">XX XXX <small>UZS</small></div>
            <p>For serious gaming sessions.</p>
          </div>
        </div>
      </section>

      {/* WORKING HOURS */}
      <section className="hours">
        <div>
          <p className="small-title">WE ARE WAITING FOR YOU</p>
          <h2>OUR WORKING HOURS</h2>
          <p>Come whenever you are ready to play.</p>
        </div>

        <div className="hours-box">
          <span>MONDAY – SUNDAY</span>
          <h3>10:00 – 02:00</h3>
          <span className="open-status">
            ● OPENING HOURS
          </span>
        </div>
      </section>

      {/* LOCATION */}
      <section className="location" id="location">
        <div className="section-heading">
          <p>COME AND PLAY</p>
          <h2>FIND OUR CLUB</h2>
        </div>

        <div className="location-box">
          <div className="location-icon">📍</div>
          <h3>EMPIRE CLUB</h3>
          <p>Your club address goes here</p>

          <a
            href="https://maps.google.com/"
            target="_blank"
            rel="noreferrer"
            className="primary-button"
          >
            Open Google Maps
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-brand">
          ♛ EMPIRE CLUB
        </div>
        <p>RULE YOUR GAME.</p>
        <span>© 2026 EMPIRE CLUB. All rights reserved.</span>
      </footer>
    </div>
  );
}

export default App;
