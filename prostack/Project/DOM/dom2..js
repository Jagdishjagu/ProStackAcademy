class Saving_Account {
  constructor() {}
  min_Bal = 500;
  open_Account() {
    console.log("Account Opened Successfully");
    console.log("Your minimum balance is :", this.min_Bal); // This key word pointing to current object //
  }
  deposite() {
    console.log("You have deposited 10,000");
  }
  withdraw() {
    console.log("Amount withdrawl 5000 in SBI, Bnanaswadi branch");
  }
  getStatement() {
    console.log("Print statement.....");
  }
  getBal() {}
  close_Account() {}
}
let jagu = new Saving_Account(101, "rahul", 5000); // To initialize first valuw we need constructer //
console.log(jagu);
jagu.open_Account();
jagu.deposite();
jagu.withdraw();
jagu.getStatement();
