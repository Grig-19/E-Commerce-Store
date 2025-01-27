// import React, { useState } from "react";
// import { Container, Row, Col, Card, Button } from "react-bootstrap";

// // Import images
// import fansImg from "../img/gallery/1-fans.jpg";
// import img2 from "../img/gallery/2.jpg";
// import sebiImg from "../img/gallery/sebi.jpg";
// import img4 from "../img/gallery/4.jpg";
// import albumCover from "../img/album-cover.jpg"; // Album cover image
// // Additional band members' images
// import emi from "../img/gallery/emi.jpg";
// import kuky from "../img/gallery/kuky.jpg";
// import prok from "../img/gallery/prok.jpg";
// import grig from "../img/gallery/grig.jpg";

// function About() {
//   const [currentSong, setCurrentSong] = useState(null);

//   const songs = [
//     { name: "Talpa", src: "/audio/talpa.mp3" },
//     { name: "O viata avem", src: "/audio/o_viata_avem.mp3" },
//     { name: "Voua nu va pasa", src: "/audio/voua_nu_va_pasa.mp3" },
//     { name: "Facem show", src: "/audio/facem_show.mp3" },
//     { name: "Aripi de cenusa", src: "/audio/aripi_de_cenusa.mp3" },
//     { name: "Lasa-ma", src: "/audio/lasa_ma.mp3" },
//     { name: "Generatii", src: "/audio/generatii.mp3" },
//     { name: "Criza de Identitate", src: "/audio/criza_de_identitate.mp3" },
//     { name: "Geampara", src: "/audio/geampara.mp3" },
//     { name: "Opritiva-va", src: "/audio/opritiva_va.mp3" },
//     { name: "Revolta", src: "/audio/revolta.mp3" },
//     { name: "Fiara", src: "/audio/fiara.mp3" },
//     { name: "Schimba-te", src: "/audio/schimba_te.mp3" },
//   ];

//   const playSong = (src) => setCurrentSong(src);

//   const galleryImages = [fansImg, img2, sebiImg, img4, emi, kuky, prok, grig];

//   return (
//     <section className="about-section">
//       <Container className="py-5">
//         <Row className="align-items-center mb-5">
//           <Col md={6}>
//             <div className="about-description text-center text-md-left">
//               <h2 className="text-uppercase text-bold text-light">
//                 Despre Noi
//               </h2>
//               <p className="lead text-white-50">
//                 Formația este alcătuită din trei instrumentiști și doi mc care
//                 au o energie aparte și vin cu o mixtură de rock/rap și influențe
//                 progressive funk.
//               </p>
//             </div>
//           </Col>
//           <Col md={6}>
//             <div className="song-list">
//               {songs.map((song, index) => (
//                 <Button
//                   key={index}
//                   variant="outline-light"
//                   className="m-2"
//                   onClick={() => playSong(song.src)}
//                 >
//                   {song.name}
//                 </Button>
//               ))}
//             </div>
//             {currentSong && (
//               <audio controls autoPlay src={currentSong} className="mt-4 w-100">
//                 Your browser does not support the audio element.
//               </audio>
//             )}
//           </Col>
//         </Row>
//         <Row>
//           <h3 className="text-light mb-4">Gallery</h3>
//           {galleryImages.map((image, index) => (
//             <Col sm={6} md={3} key={index} className="mb-4">
//               <Card className="bg-dark text-white">
//                 <Card.Img src={image} alt={`Gallery ${index + 1}`} />
//               </Card>
//             </Col>
//           ))}
//         </Row>
//       </Container>
//     </section>
//   );
// }

// export default About;

import React, { useState, useEffect, useRef } from "react";
import { Container, Button, Row, Col, Card } from "react-bootstrap";

import talpa from "../audio/talpa.wav";
import oViataAvem from "../audio/o_viata_avem.wav";
import pasa from "../audio/voua_nu_va_pasa.wav";
// import show from "../audio/show.wav.";
import aripi from "../audio/Punkarta_05_aripi_de_cenusa_mstr_48K-24b.wav";
import lasa from "../audio/Punkarta_06_lasa-ma_mstr_48K-24b.wav";
import generatii from "../audio/Punkarta_07_generatii_mstr_48K-24b.wav";
import identitate from "../audio/Punkarta_08_criza_de_identitate_mstr_48K-24b.wav";
import geampara from "../audio/Punkarta_09_geampara_mstr_48K-24b.wav";
import opriti from "../audio/Punkarta_10_opriti-va_mstr_48K-24b.wav";
import revoluta from "../audio/Punkarta_10_opriti-va_mstr_48K-24b.wav";
import fiara from "../audio/Punkarta_10_opriti-va_mstr_48K-24b.wav";
import schimba from "../audio/Punkarta_10_opriti-va_mstr_48K-24b.wav";

import fansImg from "../img/gallery/1-fans.jpg";
import img2 from "../img/gallery/2.jpg";
import sebiImg from "../img/gallery/sebi.jpg";
import img4 from "../img/gallery/4.jpg";
import albumCover from "../img/album-cover.jpg"; // Album cover image
// Additional band members' images
import emi3 from "../img/gallery/emi3.jpg";
import kuky from "../img/gallery/kuky.jpg";
import prok from "../img/gallery/prok.jpg";
import grig from "../img/gallery/grig.jpg";

import aboutVideo from "../video/video1.mp4";
import mic from "../img/mic-graphic.png";
import contenticon from "../img/12.png";

function About() {
  const [currentSong, setCurrentSong] = useState(null);
  const aboutTextRef = useRef(null); // Reference to the about text
  const [isVisible, setIsVisible] = useState(false); // State to track visibility

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (aboutTextRef.current) {
      observer.observe(aboutTextRef.current);
    }

    return () => {
      if (aboutTextRef.current) {
        observer.unobserve(aboutTextRef.current);
      }
    };
  }, []);

  // Define songs
  const songs = [
    { name: "Talpa", src: talpa },
    { name: "O viata avem", src: oViataAvem },
    { name: "Voua nu va pasa", src: pasa },
    // { name: "Facem show", src: show },
    { name: "Aripi de cenusa", src: aripi },
    { name: "Lasa-ma", src: lasa },
    { name: "Generatii", src: generatii },
    { name: "Criza de Identitate", src: identitate },
    { name: "Geampara", src: geampara },
    { name: "Opritiva-va", src: opriti },
    { name: "Revolta", src: revoluta },
    { name: "Fiara", src: fiara },
    { name: "Schimba-te", src: schimba },
  ];

  const audioRef = useRef();

  const playSong = (src) => {
    setCurrentSong(src);
    if (audioRef.current) {
      audioRef.current.load();
      audioRef.current
        .play()
        .catch((error) =>
          console.log("Playback was prevented. Error: ", error)
        );
    }
  };

  return (
    <>
      {/* Band Description and Gallery Section */}
      <section
        id="about-section"
        className="about-section"
        style={{ padding: "0", width: "100%" }}
      >
        <Container>
          <Row className="mb-5">
            <Col md={12}>
              <div className="about-container">
                <h2 className="text-left about-title">About us</h2>
                <p
                  ref={aboutTextRef}
                  className={`text-center about-text ${
                    isVisible ? "fade-in animate" : ""
                  }`}
                >
                  <a>
                    Punkarta, an auditory assault on the system, fusing
                    aggressive rock riffs with hard-hitting hip hop. The
                    relentless musical rebellion against societal norms.
                  </a>
                </p>

                <video
                  autoPlay
                  muted
                  loop
                  className="about-video"
                  style={{ maxWidth: "100%" }}
                >
                  <source src={aboutVideo} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <img src={mic} className="mic-graphic"></img>
              </div>
            </Col>
          </Row>
        </Container>
        <Container className="py-5">
          {/* Apply custom-gap class to Row */}
          <Row noGutters className="gx-4 gy-4 custom-gap">
            {/* Mapping through images to create columns */}
            {[fansImg, img2, sebiImg, img4, kuky, prok, emi3, grig].map(
              (image, index) => (
                <Col key={index} md={6} className="mb-4">
                  <Card className="gallery-card h-100">
                    <Card.Img variant="top" src={image} />
                    {/* Conditional rendering for the album cover */}
                    {image === albumCover && (
                      <Card.ImgOverlay className="d-flex align-items-center justify-content-center">
                        <Button
                          variant="light"
                          onClick={() => playSong(/* Song Source */)}
                        >
                          Play Album
                        </Button>
                      </Card.ImgOverlay>
                    )}
                  </Card>
                </Col>
              )
            )}
          </Row>
        </Container>
      </section>

      {/* Music Section */}
      <div
        className="music-section"
        style={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          background: "linear-gradient(145deg, #0f0f0f, #1a1a2e);",
          color: "white",
        }}
      >
        <Container>
          {/* <div className="content-icon">
            <img
              className="content-img"
              src={contenticon}
              alt="Content Icon"
            ></img>
          </div> */}
          <Row
            className="justify-content-center align-items-center music-album"
            style={{ height: "100%" }}
          >
            <Col md={6} className="text-center">
              <img
                src={albumCover}
                alt="Album Cover"
                className="img-fluid mb-3"
              />
              <h2>Latest Album</h2>
              <p>Check out our latest tunes from the album "Pandemic Sound".</p>
            </Col>
            <Col md={6}>
              <h2 className="text-center mb-4">Listen Now</h2>
              <ol className="song-list">
                {songs.map((song, index) => (
                  <li
                    key={index}
                    className="song-item"
                    onClick={() => playSong(song.src)}
                  >
                    {song.name}
                  </li>
                ))}
              </ol>
              {currentSong && (
                <audio controls autoPlay className="mt-4 w-100" ref={audioRef}>
                  <source src={currentSong} type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
              )}
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default About;
