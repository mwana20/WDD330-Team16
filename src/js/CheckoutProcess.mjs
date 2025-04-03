export default class CheckoutProcess {
    constructor(key, outputSelector) {
      this.key = key;
      this.outputSelector = outputSelector;
      this.list = [];
      this.itemTotal = 0;
      this.shipping = 0;
      this.tax = 0;
      this.orderTotal = 0;
    }
  
    init() {
      this.list = getLocalStorage(this.key);
      this.calculateItemSummary();
      this.calculateOrderTotal();
    }
  
    calculateItemSubTotal() {
      // Calculate and display the total dollar amount of the items in the cart and the number of items.
      this.itemTotal = this.list.reduce((total, item) => total + (item.price * item.quantity), 0);
      const itemCount = this.list.reduce((total, item) => total + item.quantity, 0);
      // Display item total and count
      const itemSummary = document.querySelector(`${this.outputSelector} #item-summary`);
      itemSummary.innerText = `${itemCount} items - $${this.itemTotal.toFixed(2)}`;
    }
  
    calculateOrderTotal() {
      // Calculate the tax and shipping amounts. Add those to the cart total to figure out the order total.
      this.tax = this.itemTotal * 0.06;
      this.shipping = this.itemTotal > 50 ? 0 : 5.99; 
      this.orderTotal = this.itemTotal + this.tax + this.shipping;
  
      // Display the totals
      this.displayOrderTotals();
    }
  
    displayOrderTotals() {
      // Once the totals are all calculated, display them in the order summary page
      const taxElement = document.querySelector(`${this.outputSelector} #tax`);
      const shippingElement = document.querySelector(`${this.outputSelector} #shipping`);
      const orderTotalElement = document.querySelector(`${this.outputSelector} #order-total`);
  
      taxElement.innerText = `$${this.tax.toFixed(2)}`;
      shippingElement.innerText = `$${this.shipping.toFixed(2)}`;
      orderTotalElement.innerText = `$${this.orderTotal.toFixed(2)}`;
    }
}
