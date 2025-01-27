import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComponent from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Cancel from "./pages/Cancel";
import Store from "./pages/Store";
import Music from "./pages/Music";
import Success from "./pages/Success";
import CartProvider from "./CartContext";
import Contact from "./pages/Contact";
import ProductDetailPage from "./components/ProductDetailPage"; // Import ProductDetailPage
import "bootstrap/dist/css/bootstrap.min.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSpotify,
  faFacebookF,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

import { Container } from "react-bootstrap";
import shopIcon from "./img/shopping-cart.png";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div className="hero-section">
          <NavbarComponent />
          <div className="listen-text">Listen to our music</div>
          <a
            href="https://open.spotify.com/artist/4lmFSR0Vx8c6XRGCKH5D4e"
            className="spotify-button"
            aria-label="Spotify"
          >
            <FontAwesomeIcon icon={faSpotify} />
          </a>
          <div className="listen-merch">Check the merch</div>
          <a href="/store" className="shop-button" aria-label="Shop">
            <img src={shopIcon} alt="Shop" />
          </a>
          <div className="social-sidebar">
            {/* Social media icons */}
            <a
              href="https://www.facebook.com/Punkarta2018/"
              className="social-icon"
              aria-label="Facebook"
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a
              href="https://www.youtube.com/@punkartaromania9977"
              className="social-icon"
              aria-label="YouTube"
            >
              <FontAwesomeIcon icon={faYoutube} />
            </a>
            <a
              href="https://www.instagram.com/punkarta/"
              className="social-icon"
              aria-label="Instagram"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>
        <div className="content-section">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/store" element={<Store />} />
            <Route path="/success" element={<Success />} />
            <Route path="/cancel" element={<Cancel />} />
            <Route path="/music" element={<Music />} />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="/product/:productId"
              element={<ProductDetailPage />}
            />{" "}
            {/* New Route for Product Details */}
          </Routes>
        </div>
        <footer className="footer">
          <Container>
            <div className="social-icons">
              {/* Social media icons */}
              <a
                href="https://www.facebook.com/Punkarta2018/"
                aria-label="Facebook"
              >
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a
                href="https://www.youtube.com/@punkartaromania9977"
                className="social-icon"
                aria-label="YouTube"
              >
                <FontAwesomeIcon icon={faYoutube} />
              </a>
              <a
                href="https://open.spotify.com/artist/4lmFSR0Vx8c6XRGCKH5D4e"
                className="social-icon-spotify"
                aria-label="Spotify"
              >
                <FontAwesomeIcon icon={faSpotify}></FontAwesomeIcon>
              </a>
              <a
                href="https://www.instagram.com/punkarta/"
                aria-label="Instagram"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
            <span className="footer-text">
              © 2024 Rootka Studio. All Rights Reserved.
            </span>
          </Container>
        </footer>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;

function Home() {
  // Assuming Home renders some introductory content and links to major sections
  return (
    <>
      <Container className="mt-5">
        <About />
      </Container>
      <Container className="mt-5">
        <h2 className="merch-title">Merch</h2>
        <Store />
      </Container>
    </>
  );
}
