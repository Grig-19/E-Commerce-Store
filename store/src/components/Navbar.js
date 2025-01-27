import { Button, Container, Navbar, Modal, Nav, Badge } from "react-bootstrap";
import { useState, useContext } from "react";
import { CartContext } from "../CartContext";
import CartProduct from "./CartProduct";
import { Link, useNavigate } from "react-router-dom";
import logo from "../img/logo2.png";

function NavbarComponent() {
  const { items, getTotalCost } = useContext(CartContext);
  const totalItems = items.reduce((total, item) => total + item.quantity, 0);
  const cart = useContext(CartContext);

  const [show, setShow] = useState(false); // State for showing the cart modal
  const [expanded, setExpanded] = useState(false); // State for Navbar collapse

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const checkout = async () => {
    try {
      const response = await fetch("http://localhost:4000/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ items: cart.items }),
      });
      const data = await response.json();
      if (data.url) {
        // Redirect user to Stripe checkout page
        window.location.href = data.url;
      } else {
        // Handle cases where no URL is returned
        console.error("No checkout URL returned from the server.");
      }
    } catch (error) {
      // Handle any errors that occurred during the fetch
      console.error("Error during checkout:", error);
    }
  };
  const navigate = useNavigate();

  const handleNavigate = (path, sectionId) => {
    navigate(path);
    setExpanded(false); // Collapse the navbar when a link is clicked
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, 0);
  };

  return (
    <>
      <Navbar
        expand="lg"
        className="navbar justify-content-between"
        variant="dark"
        fixed="top"
        expanded={expanded}
      >
        <Container>
          <Navbar.Brand as={Link} to="/" className="navbar-brand">
            <div className="logo-container">
              <img src={logo} className="logo"></img>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={() => setExpanded(expanded ? false : "expanded")}
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => handleNavigate("/about", "about-section")}
              >
                About
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/music"
                onClick={() => handleNavigate("/music", "music-section")}
              >
                Music
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/store"
                onClick={() => handleNavigate("/store", "container-store")}
              >
                Store
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/contact"
                onClick={() => handleNavigate("/contact", "contact-container")}
              >
                Contact
              </Nav.Link>
            </Nav>
            <Button variant="outline-light" onClick={handleShow}>
              Cart <Badge bg="secondary">{totalItems}</Badge>
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Shopping Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {items.length > 0 ? (
            <>
              <p>Items in your cart:</p>
              {items.map((item) => (
                <CartProduct
                  key={`${item.id}_${item.size}_${item.color}`}
                  id={item.id}
                  size={item.size}
                  color={item.color}
                  quantity={item.quantity}
                />
              ))}
              <h1>Total: ${getTotalCost().toFixed(2)}</h1>
              <Button
                className="purchase-items"
                variant="success"
                onClick={checkout}
              >
                Purchase items!
              </Button>
            </>
          ) : (
            <h1>There are no items in your cart!</h1>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
}

export default NavbarComponent;
