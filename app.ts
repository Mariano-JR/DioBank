import { BonusAccount } from './class/BonusAccount'
import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
console.log(peopleAccount)
peopleAccount.deposit(100)
peopleAccount.withdraw(30)

const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
console.log(companyAccount)
companyAccount.deposit(500)
companyAccount.withdraw(25)
companyAccount.getLoan(2000)

const bonusAccount: BonusAccount = new BonusAccount('Mariano', 30)
console.log(bonusAccount)
bonusAccount.deposit(50)
bonusAccount.withdraw(20)
