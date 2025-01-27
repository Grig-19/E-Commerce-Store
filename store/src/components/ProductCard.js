import React, { useContext, useState } from "react";
import { Card, Button, Dropdown, DropdownButton, Alert } from "react-bootstrap";
import { CartContext } from "../CartContext"; // Ensure this path is correct

function ProductCard({ product }) {
  const { addOneToCart } = useContext(CartContext);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleAddToCart = () => {
    addOneToCart(product.id, selectedSize, selectedColor);
    setShowSuccessMessage(true);
    setTimeout(() => setShowSuccessMessage(false), 3000);
  };

  // Directly using the price since it's assumed to be in RON based on your array
  const formattedPrice = product.price.toFixed(2);

  return (
    <Card
      className="product-card mb-4"
      style={{ backgroundColor: "#222", color: "white" }}
    >
      <Card.Img
        variant="top"
        src={product.images[selectedColor]}
        alt={`Image of ${product.title}`}
        onClick={() => {} /* navigate to product detail page if needed */}
      />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>RON {formattedPrice}</Card.Text>
        <div className="color-selector mb-3 d-flex">
          {product.colors.map((color, index) => (
            <Button
              key={index}
              style={{
                backgroundColor: color,
                border:
                  color === selectedColor ? "2px solid #fff" : "1px solid #777",
                borderRadius: "50%",
                width: "20px",
                height: "20px",
                padding: 0,
                marginRight: "5px",
                cursor: "pointer",
              }}
              onClick={() => setSelectedColor(color)}
              aria-label={`Select ${color}`}
            ></Button>
          ))}
        </div>
        {showSuccessMessage && (
          <Alert variant="success" className="mt-3">
            Item successfully added to cart!
          </Alert>
        )}
        <DropdownButton
          id="dropdown-size-select"
          title={`Size: ${selectedSize}`}
          variant="secondary"
          className="mb-3"
        >
          {product.sizes.map((size) => (
            <Dropdown.Item key={size} onClick={() => setSelectedSize(size)}>
              {size}
            </Dropdown.Item>
          ))}
        </DropdownButton>
        {/* <Button
          variant="primary"
          className="add-to-cart-btn"
          onClick={handleAddToCart}
        >
          Add to Cart
        </Button> */}
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
