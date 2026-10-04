namespace bank.db;

using {
    cuid,
    managed
} from '@sap/cds/common';

entity Banks : cuid, managed {
    name     : String(50);
    branch   : Composition of many Branch
                   on branch.bank = $self;
    accounts : Composition of many Accounts
                   on accounts.bank = $self;

}

entity Branch : cuid {
    name       : String(50);
    ifsccode   : String;
    address    : String(255);
    mainBranch : String;
    pincode    : String;
    city       : String;
    country    : String;
    bank       : Association to Banks;
}

entity Customer : cuid, managed {
    name    : String;
    address : String;
    email   : String;
    mobile  : String;
    account : Association to Accounts;
}

entity Accounts : cuid {
    accountNo   : Integer;
    accountType : String;
    balance     : Decimal(10, 2);
    bank        : Association to Banks;
}
