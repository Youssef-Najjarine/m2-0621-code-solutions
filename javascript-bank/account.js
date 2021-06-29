/* exported Account */

function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];
  if (number > 0 && typeof holder === 'string') {
    return true;
  }
  return false;
}


Account.prototype.deposit = function (amount) {
  if (amount > 0 && typeof amount === 'number' && amount % 1 === 0) {

    let transaction = new Transaction('deposit', amount);
    this.transactions.push(transaction);

    return true;
  }
  return false;
}

Account.prototype.withdraw = function (amount) {
  if (amount > 0 && typeof amount === 'number' && amount % 1 === 0) {
    let transaction = new Transaction('withdrawal', amount);
    this.transactions.push(transaction);

    return true;
  }
  return false;
}


Account.prototype.getBalance = function () {
  let deposits = 0;
  let withdrawals = 0;

  for (let i = 0; i < this.transactions.length; i++) {
    if (this.transactions[i].type === 'deposit') {
      deposits += this.transactions[i].amount;
    } else {
      withdrawals += this.transactions[i].amount;
    }
  }
  let currentBalance = deposits - withdrawals;
  if (currentBalance > 0) {
    return currentBalance;
  }
  return 0;
}
