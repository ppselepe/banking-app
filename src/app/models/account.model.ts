 export class Account {
  public account: any;
  public accounts: any;
  public age: string;
  public name: string;



constructor(json?:any){
  if (json) {
    this.account = json.account;
    this.accounts = json.accounts;
    this.age = json.age;
     this.name = json.name;
  }else{
     this.account ='';
     this.accounts = '';
     this.age = '';
     this.name ='';
   }
 }
}

/*export interface Account {
  account: any;
  accounts: any;
  name: string;
  age: string;
}*/
