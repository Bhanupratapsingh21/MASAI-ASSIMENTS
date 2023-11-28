function Bankaccount(accountno, name, type, balance) {
    this.accountno = accountno;
    this.name = name;
    this.type = type;
    this.balance = balance;
  }
  
  Bankaccount.prototype.deposit = function (amount) {
    this.balance += amount;
  };
  
  Bankaccount.prototype.withdrawl = function (amount) {
    this.balance -= amount;
  };
  
  Bankaccount.prototype.checkbalance = function () {
    console.log(`Total Balance for ${this.name}'s account = ${this.balance}`);
  };
  
  Bankaccount.prototype.isactive = function () {
    if (this.balance >= 1) {
      console.log(`Active account, total deposit amount is = ${this.balance}`)
    return true
    } else {
      console.log("Not Active Account");
    }
  };
  /*adding values to accounts  */
  let person1 = new Bankaccount("45785", "ranveer", "SAVING", 2);
  let person2 = new Bankaccount("78901", "deepika", "SAVING", 45);
  
  // to calculate total in arry 
  
  let accounts = [person1, person2];
  
  function getTotalBalance(accounts) {
    let totalBalance = 0;
  
    for (let account of accounts) {
      if (account.isactive()) {
        totalBalance += account.balance;
      }
    }
  
    console.log(`Total Balance of all active accounts = ${totalBalance}`);
    return totalBalance;
  }
  /** funtion close  */
  
  
  
  
  //  usage
  person1.deposit(13);
  person1.withdrawl(5);
  person1.checkbalance();
  person1.isactive();
  
  
  getTotalBalance(accounts);