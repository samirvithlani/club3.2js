const searchFood = () => {
  console.log("searching food");
};

searchFood();

const placeOrder = () => {
  console.log("placing order");
};
const payBill = () => {
  console.log("paying bill");
};

setTimeout(() => {
  placeOrder();
}, 3000);

setTimeout(() => {
  payBill();
}, 6000);
