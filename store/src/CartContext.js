import React, { createContext, useState } from "react";
import { getProductData } from "./productsStore";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([]);

  // Finds the index of a product in the cart by its ID and size
  const findProductIndex = (id, size, color) =>
    cartProducts.findIndex(
      (product) =>
        product.id === id && product.size === size && product.color === color
    );

  // Gets the quantity of a product in the cart by its ID and size
  const getProductQuantity = (id, size) => {
    const index = findProductIndex(id, size);
    return index >= 0 ? cartProducts[index].quantity : 0;
  };

  // Adds a product to the cart or increases its quantity by its ID and size
  const addOneToCart = (id, size, color, quantity) => {
    const productIndex = findProductIndex(id, size, color);
    if (productIndex !== -1) {
      // Product with the same size and color exists, increase quantity
      const newCartProducts = [...cartProducts];
      newCartProducts[productIndex] = {
        ...newCartProducts[productIndex],
        quantity: newCartProducts[productIndex].quantity + 1,
      };
      setCartProducts(newCartProducts);
    } else {
      // Add new product entry with size and color
      setCartProducts([...cartProducts, { id, size, color, quantity: 1 }]);
    }
  };

  // Removes one quantity of a product from the cart by its ID and size or deletes it if quantity is 1
  const removeOneFromCart = (id, size, color) => {
    const productIndex = findProductIndex(id, size, color);
    if (productIndex !== -1) {
      // Product exists, decrease quantity
      const newCartProducts = [...cartProducts];
      if (newCartProducts[productIndex].quantity > 1) {
        newCartProducts[productIndex].quantity -= 1;
      } else {
        newCartProducts.splice(productIndex, 1);
      }
      setCartProducts(newCartProducts);
    }
  };

  // Deletes a product from the cart by its ID and size
  const deleteFromCart = (id, size, color) => {
    setCartProducts(
      cartProducts.filter(
        (product) => !(product.id === id && product.size === size)
      )
    );
  };

  // Calculates the total cost of the products in the cart
  const getTotalCost = () => {
    return cartProducts.reduce((total, product) => {
      const productData = getProductData(product.id);
      return total + (productData ? productData.price * product.quantity : 0);
    }, 0);
  };

  const contextValue = {
    items: cartProducts,
    getProductQuantity,
    addOneToCart,
    removeOneFromCart,
    deleteFromCart,
    getTotalCost,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
