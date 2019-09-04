export class Account {
  public account: any;
  public accounts: any;
  public age: string;
  public name: string;


  constructor(json?:any){
    if (json) {
      this.accounts = json.accounts;
      this.age = json.age;
      this.name = json.name;
    }else{
      this.accounts = '';
      this.age = '';
      this.name ='';
    }
  }
}
