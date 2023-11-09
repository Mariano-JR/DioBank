import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  getLoan = (value: number): void => {
    if(this.validateStatus() && value > 0) {
      this.setBalance(value)
      console.log(`
      * Emprestimo de R$ ${value} Realizado com Sucesso *

      Saldo Disponivel: R$ ${this.getBalance()}
      `);
    }
  }
}
