import { getLocalStorage, renderListWithTemplate } from "./utils.mjs";

export default class ShoppingCart {
  constructor(key, parentSelector, templateElement) {
    this.key = key;
    this.parentSelector = parentSelector;
    this.templateElement = templateElement; // Reference to the <template> element
  }

  renderCartContents() {
    const cartItems = getLocalStorage(this.key);
    const parentElement = document.querySelector(this.parentSelector);

    // Use the utility function to render the cart items with the template
    renderListWithTemplate(this.templateElement, parentElement, cartItems, this.prepareTemplate);
  }

  prepareTemplate(template, item) {
    const imgElement = template.querySelector(".cart-card__image img");

    // Use the specific tent image from the item data
    imgElement.src = item.Image; // Ensure `item.Image` contains the correct tent image URL
    imgElement.alt = item.Name;

    template.querySelector(".card__name").textContent = item.Name;
    template.querySelector(".cart-card__color").textContent = item.Colors[0].ColorName;
    template.querySelector(".cart-card__quantity").textContent = `qty: 1`;
    template.querySelector(".cart-card__price").textContent = `$${item.FinalPrice}`;
    return template;
  }
}
