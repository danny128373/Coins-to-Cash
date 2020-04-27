const piggyBank = {
  pennies: 150,
  nickels: 25,
  dimes: 30,
  quarters: 40
}

const dollarAmount = (piggyBank) => {
  const total = piggyBank.pennies * .01 + piggyBank.nickels * .05 + piggyBank.dimes * .1 + piggyBank.quarters * .25;
  console.log(`Your total dollar amount is $${total}`);
}

dollarAmount(piggyBank);