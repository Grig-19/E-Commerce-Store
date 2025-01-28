import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Image,
  Button,
  DropdownButton,
  Dropdown,
  Alert,
} from "react-bootstrap";
import { getProductData } from "../productsStore";
import { CartContext } from "../CartContext";
import "../App.css"; // Import the CSS stylesheet

function ProductDetailPage() {
  const { productId } = useParams();
  const product = getProductData(productId);
  const { addOneToCart } = useContext(CartContext);

  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleAddToCart = () => {
    addOneToCart(product.id, selectedSize, selectedColor);
    setShowSuccessMessage(true);
    setTimeout(() => setShowSuccessMessage(false), 3000);
  };

  useEffect(() => {}, [productId]);

  return (
    <Container className="my-5 product-detail">
      <Row>
        <Col md={6}>
          <Image
            src={product.images[selectedColor]}
            alt={product.title}
            thumbnail
            fluid
          />
        </Col>
        <Col md={6}>
          <h2 className="product-title">{product.title}</h2>
          <p className="product-description">{product.description}</p>
          <h3 className="product-price">RON {product.price.toFixed(2)}</h3>
          <Row className="my-3">
            <Col>
              <DropdownButton
                id="color-dropdown"
                title={`Color: ${selectedColor}`}
                className="color-dropdown"
              >
                {product.colors.map((color) => (
                  <Dropdown.Item
                    key={color}
                    onClick={() => setSelectedColor(color)}
                  >
                    {color}
                  </Dropdown.Item>
                ))}
              </DropdownButton>
            </Col>
            <Col>
              <DropdownButton
                id="size-dropdown"
                title={`Size: ${selectedSize}`}
                className="size-dropdown"
              >
                {product.sizes.map((size) => (
                  <Dropdown.Item
                    key={size}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </Dropdown.Item>
                ))}
              </DropdownButton>
            </Col>
          </Row>
          <Button
            variant="primary"
            onClick={handleAddToCart}
            className="add-to-cart-btn"
          >
            Add to Cart
          </Button>
          {showSuccessMessage && (
            <Alert variant="success" className="mt-3 success-message">
              Item successfully added to cart!
            </Alert>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default ProductDetailPage;
