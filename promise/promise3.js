const placeOrder = () => {
    console.log("Order is being placed");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        message: "Order placed successfully",
        orderId: 1234,
        amount: 500,
      });
    }, 3000);
  });
};

const payment = (orderData) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        message: "Payment done successfully",
        paymentId: 1234,
        amount: orderData.amount,
      });
    },2000);
  });
};

placeOrder().then((res) => {
  console.log(res);
  payment(res).then((data) => {
    console.log(data);
  }).catch((err) => {
    console.log(err);
  })
}).catch((err) => {
    console.log(err);
})
