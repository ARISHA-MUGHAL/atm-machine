import inquirer from "inquirer";
let myBalance = 50000;
let myPin = 3638;
let atmPin = await inquirer.prompt({
  name: "pinCode",
  type: "number",
  message: "Please type your pin code ",
});
if (atmPin.pinCode === myPin) {
  console.log("correct pin code");
  let action = await inquirer.prompt({
    name: "command",
    message: "what command you want to give ",
    type: "list",
    choices: ["withdraw", "check balance", "deposit", "fast cash"],
  });
  if (action.command === "withdraw") {
    let amountAns = await inquirer.prompt({
      name: "amount",
      message: "How much amount you want to withdraw ? ",
      type: "number",
    });
    if (amountAns.amount > myBalance) {
      console.log("you dont have this much money");
    } else {
      myBalance -= amountAns.amount;
      console.log("your remaining balance is : " + myBalance);
    }
  } else if (action.command === "check balance") {
    console.log(`your current balance is ${myBalance} `);
  } else if (action.command === "deposit") {
    let amountInfo = await inquirer.prompt({
      name: "depositamount",
      message: "How much amount you want to deposit ? ",
      type: "number",
    });
    myBalance += amountInfo.depositamount;
    console.log("Now your balance is : " + myBalance);
  } else if (action.command === "fast cash") {
    let fastCash = await inquirer.prompt({
      name: "preDefinedAmount",
      message: "Choose how much amount you want to withdraw",
      type: "list",
      choices: [
        "1000",
        "5000",
        "10000",
        "15000",
        "20000",
        "25000",
        "30000",
        "40000",
        "50000",
      ],
    });
    if (fastCash.preDefinedAmount > myBalance) {
      console.log("you dont have this much money");
    } else {
      myBalance -= fastCash.preDefinedAmount;
      console.log("your remaining balance is : " + myBalance);
    }
  }
} else {
  console.log("incorrect pin code");
}
