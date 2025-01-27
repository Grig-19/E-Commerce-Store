import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSpotify,
  faFacebookF,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, such as sending data to an API or email
    console.log(formData);
    alert("Thank you for your message. We will get back to you soon!");
  };

  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <div className="grid-container">
        {/* <div className="form-container">
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>
        </div> */}
        <div className="contact-info">
          <p>For booking and inquiries:</p>
          <p>Email: Punkarta2018@gmail.com</p>
          <p>Phone: +40752457995</p>
          <p>Follow us on our social media!</p>
          <div className="container">
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
