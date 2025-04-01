import { getParam, loadHeaderFooter } from "./utils.mjs";
import ProductData from "./ProductData.mjs";
import ProductDetails from "./ProductDetails.mjs";

loadHeaderFooter();

const dataSource = new ProductData("tents");
const productID = getParam("product");

const product = new ProductDetails(productID, dataSource);
product.init();

document.addEventListener("DOMContentLoaded", () => {
  const cartCountElement = document.querySelector(".cart-count");

  // Initialize cart count from localStorage or set to 0
  let cartCount = parseInt(localStorage.getItem("cartCount")) || 0;
  cartCountElement.textContent = cartCount;

  // Example function to add items to the cart
  function addToCart() {
    cartCount += 1; // Increment cart count
    cartCountElement.textContent = cartCount; // Update the UI
    localStorage.setItem("cartCount", cartCount); // Save to localStorage
  }

  // Example: Attach the addToCart function to a button
  const addToCartButton = document.querySelector(".add-to-cart");
  if (addToCartButton) {
    addToCartButton.addEventListener("click", addToCart);
  }
});

// Add the button to the document
const addToCartButton = document.createElement("button");
addToCartButton.classList.add("add-to-cart");
addToCartButton.textContent = "Add to Cart";
document.body.appendChild(addToCartButton);
