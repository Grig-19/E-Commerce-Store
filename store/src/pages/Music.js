import React, { useState, useRef } from "react";
import { Container, Button, Row, Col } from "react-bootstrap";
import albumCover from "../img/album-cover.jpg";
import talpa from "../audio/talpa.wav";
import oViataAvem from "../audio/o_viata_avem.wav";

function Music() {
  const [currentSong, setCurrentSong] = useState(null);

  const songs = [
    { name: "Talpa", src: talpa },
    { name: "O viata avem", src: oViataAvem },
    { name: "Voua nu va pasa", src: "/audio/voua_nu_va_pasa.mp3" },
    { name: "Facem show", src: "/audio/facem_show.mp3" },
    { name: "Aripi de cenusa", src: "/audio/aripi_de_cenusa.mp3" },
    { name: "Lasa-ma", src: "/audio/lasa_ma.mp3" },
    { name: "Generatii", src: "/audio/generatii.mp3" },
    { name: "Criza de Identitate", src: "/audio/criza_de_identitate.mp3" },
    { name: "Geampara", src: "/audio/geampara.mp3" },
    { name: "Opritiva-va", src: "/audio/opritiva_va.mp3" },
    { name: "Revolta", src: "/audio/revolta.mp3" },
    { name: "Fiara", src: "/audio/fiara.mp3" },
    { name: "Schimba-te", src: "/audio/schimba_te.mp3" },
    // ... add more songs as needed
  ];

  const playSong = (src) => {
    if (currentSong !== src) {
      setCurrentSong(src);
    }
  };

  const getButtonStyle = (songSrc) => {
    return currentSong === songSrc
      ? { backgroundColor: "#007bff", color: "white", borderColor: "#007bff" } // Active song style
      : { backgroundColor: "transparent", color: "#fff", borderColor: "#fff" }; // Inactive song style
  };
  const audioRef = useRef();

  return (
    <div
      id="music-section"
      className="music-section"
      style={{ height: "100vh", display: "flex", alignItems: "center" }}
    >
      <Container>
        <Row
          className="justify-content-center align-items-center"
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
            <div className="d-flex flex-wrap justify-content-center">
              {songs.map((song, index) => (
                <Button
                  key={index}
                  style={getButtonStyle(song.src)}
                  className="m-2"
                  onClick={() => playSong(song.src)}
                >
                  {song.name}
                </Button>
              ))}
            </div>
            {currentSong && (
              <audio controls autoPlay key={currentSong} className="mt-4 w-100">
                <source src={currentSong} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Music;
