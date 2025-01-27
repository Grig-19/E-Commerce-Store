import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { CartContext } from "../CartContext";
import { getProductData } from "../productsStore";

function CartProduct({ id, size, color, quantity }) {
  const { addOneToCart, removeOneFromCart, deleteFromCart } =
    useContext(CartContext);
  const productData = getProductData(id);

  // Function to handle increasing the quantity
  const handleIncrement = () => addOneToCart(id, size, color);

  // Function to handle decreasing the quantity
  const handleDecrement = () => {
    if (quantity > 1) {
      removeOneFromCart(id, size, color);
    } else {
      handleDelete(); // If quantity is 1, remove the item entirely
    }
  };

  // Function to handle removing the item entirely
  const handleDelete = () => deleteFromCart(id, size, color);

  return (
    <div>
      <h3>
        {productData.title} (Size: {size}, Color: {color})
      </h3>
      <p>Quantity: {quantity}</p>
      <p>Total: ${(quantity * productData.price).toFixed(2)}</p>
      <div>
        <Button
          variant="secondary"
          onClick={handleDecrement}
          className="cart-product-button"
        >
          -
        </Button>
        <Button
          variant="secondary"
          onClick={handleIncrement}
          className="cart-product-button"
        >
          +
        </Button>
        <Button variant="danger" onClick={handleDelete}>
          Remove from Cart
        </Button>
      </div>
    </div>
  );
}
export default CartProduct;
