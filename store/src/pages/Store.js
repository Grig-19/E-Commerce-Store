// import React, { useContext } from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import ProductCard from "../components/ProductCard";
// import { productsArray } from "../productsStore"; // Ensure the import path is correct
// import { CartContext } from "../CartContext"; // Ensure the import path is correct

// function Store() {
//   const { addProductToCart } = useContext(CartContext);

//   const handleAddToCart = (product) => {
//     addProductToCart(product.id, 1); // Assuming addProductToCart expects id and quantity
//   };

//   // Adjusted function to render detailed view of each product
//   // to use the correct image based on the selected color
//   const renderDetailedProductView = (product, index) => {
//     const isEven = index % 2 === 0;
//     // Default to the first color's image if specific logic for color selection isn't implemented here
//     const productImage = product.images[product.colors[0]]; // Assumes first color is default

//     return (
//       <Row key={product.id} className="align-items-center my-5">
//         {isEven ? (
//           <>
//             <Col md={6} className="text-center">
//               <img
//                 src={productImage}
//                 alt={product.title}
//                 className="img-fluid"
//               />
//             </Col>
//             <Col md={6}>
//               <h3 className="text-center">{product.title}</h3>
//               <p className="text-center italic-style">{product.description}</p>
//             </Col>
//           </>
//         ) : (
//           <>
//             <Col md={6}>
//               <h3 className="text-center">{product.title}</h3>
//               <p className="text-center italic-style">{product.description}</p>
//             </Col>
//             <Col md={6} className="center">
//               <img
//                 src={productImage}
//                 alt={product.title}
//                 className="img-fluid"
//               />
//             </Col>
//           </>
//         )}
//       </Row>
//     );
//   };

//   return (
//     <Container className="container-store" id="container-store">
//       <Row className="my-4 p-5 text-center vert-title">
//         <Col>
//           <h1>Welcome to the Exclusive Collection</h1>
//           <p>
//             Featuring our limited edition partnership with "Vert" designer.
//             Style that speaks.
//           </p>
//         </Col>
//       </Row>
//       {/* Detailed product views for the first 4 products */}
//       {productsArray.slice(0, 4).map(renderDetailedProductView)}

//       {/* Original grid of product cards for all products */}
//       <Container>
//         <Row className="my-4">
//           <h2 className="text-center">Shop All T-Shirts</h2>
//         </Row>
//         <Row>
//           {productsArray.map((product) => (
//             <Col key={product.id} sm={12} md={6} lg={4} xl={3}>
//               <ProductCard
//                 product={product}
//                 onAddToCart={() => handleAddToCart(product)}
//                 selectedColor={product.colors[0]} // Using the first color as default
//               />
//             </Col>
//           ))}
//         </Row>
//       </Container>
//     </Container>
//   );
// }

// export default Store;

import React, { useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProductCard from "../components/ProductCard";
import { productsArray } from "../productsStore"; // Ensure the import path is correct
import { CartContext } from "../CartContext"; // Ensure the import path is correct
import { useNavigate } from "react-router-dom";
import arrowicon from "../img/arrow2.png";

function Store() {
  const navigate = useNavigate();
  const { addProductToCart } = useContext(CartContext);

  const handleAddToCart = (product) => {
    addProductToCart(product.id, 1); // Assuming addProductToCart expects id and quantity
  };

  const navigateToProductDetail = (productId) => {
    navigate(`/product/${productId}`);
  };

  const renderDetailedProductView = (product, index) => {
    const isEven = index % 2 === 0;
    const productImage = product.images[product.colors[0]]; // Assumes first color is default

    // Wrap the image with a clickable div that navigates to the detail page
    const imageElement = (
      <div
        onClick={() => navigateToProductDetail(product.id)}
        className="zoomable-image image-overlay-container"
      >
        <img
          src={productImage}
          alt={product.title}
          className="img-fluid zoomable"
        />
        <div className="overlay">
          <div className="text">View Product</div>
          <img src={arrowicon} alt="Arrow Icon" className="overlay-icon" />
        </div>
      </div>
    );
    return (
      <Row key={product.id} className="align-items-center my-5">
        {isEven ? (
          <>
            <Col md={6} className="text-center">
              {imageElement}
            </Col>
            <Col md={6}>
              <h3 className="text-center">{product.title}</h3>
              <p className="text-center italic-style">{product.description}</p>
            </Col>
          </>
        ) : (
          <>
            <Col md={6}>
              <h3 className="text-center">{product.title}</h3>
              <p className="text-center italic-style">{product.description}</p>
            </Col>
            <Col md={6} className="text-center">
              {imageElement}
            </Col>
          </>
        )}
      </Row>
    );
  };

  return (
    <Container className="container-store" id="container-store">
      <Row className="my-4 p-5 text-center vert-title">
        <Col>
          <h1>Welcome to the Exclusive Collection</h1>
          <p>
            Featuring our limited edition partnership with "Vert" designer.
            Style that speaks.
          </p>
        </Col>
      </Row>
      {/* Drop Soon Message with Background Blur */}
      <div className="drop-soon-message">
        <p className="drop-soon-text">Exciting drops coming soon! Stay tuned</p>
      </div>
      {/* Detailed product views for the first 4 products */}
      {productsArray.slice(0, 4).map(renderDetailedProductView)}

      {/* Original grid of product cards for all products */}
      <Container>
        <Row className="my-4">
          <h2 className="text-center">Shop All T-Shirts</h2>
        </Row>
        <Row>
          {productsArray.map((product) => (
            <Col key={product.id} sm={12} md={6} lg={4} xl={3}>
              <ProductCard
                product={product}
                onAddToCart={() => handleAddToCart(product)}
                selectedColor={product.colors[0]} // Using the first color as default
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Store;
