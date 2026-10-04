using {bank.db as model} from '../db/bankmodel';

service BankAccountAPIService {
    entity Banks     as projection on model.Banks;
    entity Accounts  as projection on model.Accounts;
    entity Customers as projection on model.Customer;
    entity Branch    as projection on model.Branch;

    action getAccountBalance(accountNo: String) returns String;
}
