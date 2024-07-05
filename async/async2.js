const payment = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        message: "Payment Done",
        data: {
          id: 1,
          amount: 1000,
        },
      });
    }, 3000);
  });
};

const receipt = async () => {
  console.log("Starting payment..");
  const receiptData = await payment(); // payment
  console.log("payment end..");

  console.log("receipt starts.");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(receiptData);
    }, 3000);
  });
};
const printreceipt = async () => {
  const recp = await receipt();

  console.log(recp);
  console.log("receipt end..");
};

printreceipt();
