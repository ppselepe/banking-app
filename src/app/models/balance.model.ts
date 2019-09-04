export class Balance {
  public balance: string;
  public overdraft: string;

  constructor(json?: any) {
    if(json) {
      this.balance = json.balance;
      this.overdraft = json.overdraft;
    }else{
      this.balance = '';
      this.overdraft = '';
    }
  }

}
