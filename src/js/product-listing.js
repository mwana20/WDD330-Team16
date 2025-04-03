import ProductData from "./ProductData.mjs";
import ProductList from "./ProductList.mjs";

document.addEventListener("DOMContentLoaded", () => {
    // This Handles category selection on index.html
    const categoryLinks = document.querySelectorAll(".category-link");

    if (categoryLinks.length > 0) {
        categoryLinks.forEach(link => {
            link.addEventListener("click", (event) => {
                event.preventDefault(); // Prevent default anchor behavior
                const category = link.getAttribute("data-category");
                window.location.href = `product_listing/index.html?category=${category}`;
            });
        });
        return; // Stop further execution if we're on index.html
    }

    //This Handles product listing page
    const params = new URLSearchParams(window.location.search);
    const category = params.get("category") || "tents"; // Default to tents if not provided

    const dataSource = new ProductData(category);
    const element = document.querySelector(".product-list");
    const productList = new ProductList(category, dataSource, element);

    productList.init();
});
