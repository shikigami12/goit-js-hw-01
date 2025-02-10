function getShippingMessage(country, price, deliveryFee) {
  if (typeof country !== 'string' || typeof price !== 'number' || typeof deliveryFee !== 'number') {
    return 'Invalid input! country must be a string, price must be a number and deliveryFee must be a number';
  }

  if (price < 0 || deliveryFee < 0) {
    return 'Invalid input! price and deliveryFee must be positive numbers';
  }

  return `Shipping to ${country} will cost ${price + deliveryFee} credits`;
}

console.log(getShippingMessage("Australia", 120, 50)); // "Shipping to Australia will cost 170 credits"
console.log(getShippingMessage("Germany", 80, 20)); // "Shipping to Germany will cost 100 credits"
console.log(getShippingMessage("Sweden", 100, 20)); // "Shipping to Sweden will cost 120 credits"