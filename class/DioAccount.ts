export abstract class DioAccount {
  private name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  getName = (): string => {
    return this.name
  }

  getBalance = (): number => {
    return this.balance
  }

  setBalance = (value: number) => {
    this.balance += value
  }

  deposit = (value: number): void => {
    if(this.validateStatus() && value > 0){
      this.balance += value
      console.log(`
      * Deposito de R$ ${value} Realizado com Sucesso *

      Saldo Disponivel: R$ ${this.balance}
      `)
    } else {
      console.log(`
      * Valor invalido *

      Verifique o valor do deposito
      `);
      
    }
  }

  withdraw = (value: number): void => {
    if(value > this.balance || value <= 0) {
      console.log(`
      * Valor invalido *

      Consulte seu saldo
      `);
    } else if(this.validateStatus() && value <= this.balance) {
      this.balance -= value
      console.log(`
      * Saque de R$ ${value} Realizado com Sucesso *

      Saldo Disponivel: R$ ${this.balance}
      `)
    }

  }

  protected validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}
