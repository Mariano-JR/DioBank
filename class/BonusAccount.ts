import { DioAccount } from "./DioAccount";

export class BonusAccount extends DioAccount{

    constructor(name: string, accountNumber: number) {
        super(name, accountNumber)
    }

    deposit = (value: number): void => {
        this.setBalance(value + 10)
        console.log(`
        * Deposito de R$ ${value} Realizado com Sucesso *
        **** Você ganhou um BONUS de R$ 10 !!! ****

        Saldo Disponivel: R$ ${this.getBalance()}
        `)
    }
}