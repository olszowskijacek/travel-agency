export const promoPrice = (amount, percent) => {
  return amount - (amount / 100) * percent;
};