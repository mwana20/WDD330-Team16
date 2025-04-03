import { loadHeaderFooter } from "./utils.mjs";
import "./product-listing.js"; 

loadHeaderFooter();

function updateCartCount(count) {
    document.querySelector(".cart-count").textContent = count;
}
