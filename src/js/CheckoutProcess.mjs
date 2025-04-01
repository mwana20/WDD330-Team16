export default class CheckoutProcess {
  constructor() {
    this.cartItems = [
      { name: 'Item 1', price: 20 },
      { name: 'Item 2', price: 15 },
      { name: 'Item 3', price: 30 },
    ];
  }

  calculateSubtotal() {
    const subtotal = this.cartItems.reduce((total, item) => total + item.price, 0);
    document.getElementById('subtotal').textContent = `$${subtotal.toFixed(2)}`;
    this.subtotal = subtotal;
  }

  calculateTotals() {
    const tax = this.subtotal * 0.06;
    const shipping = 10 + (this.cartItems.length - 1) * 2;
    const total = this.subtotal + tax + shipping;

    document.getElementById('tax').textContent = `$${tax.toFixed(2)}`;
    document.getElementById('shipping').textContent = `$${shipping.toFixed(2)}`;
    document.getElementById('order-total').textContent = `$${total.toFixed(2)}`;
  }
}