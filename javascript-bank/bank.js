/* exported Bank */
function Bank() {
  this.nextAccountNumber = 1;
  this.accounts = [];

}

Bank.prototype.openAccount = function (holder, balance) {
  if (balance > 0 && typeof balance === 'number' && balance % 1 === 0) {
    let account = new Account(this.nextAccountNumber, holder);
    account.deposit(balance);
    this.accounts.push(account);
    this.nextAccountNumber++;
    // console.log(this.accounts);
    return account.number;
  }
  return null;
};

Bank.prototype.getAccount = function (number) {
  for (let i = 0; i < this.accounts.length; i++) {
    if (number === this.accounts[i].number) {
      return this.accounts[i];
    }
  }
  return null;
};
Bank.prototype.getTotalAssets = function () {

  let totalAssets = 0;
  if (this.accounts != null) {
    for (let i = 0; i < this.accounts.length; i++) {
     totalAssets += this.accounts[i].getBalance();

    }

    // console.log(totalAssets);
    return totalAssets;
  }
  return 0;
};
