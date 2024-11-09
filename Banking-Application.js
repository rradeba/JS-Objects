class Account {
    constructor(accountNum, balance, customer) {
        this.accountNum = accountNum;
        this.balance = balance;
        this.customer = customer;
    }

    depositFunds(amount) {
        this.balance += amount;
        this._logTransaction('Deposited', amount);
    }


    withdrawFunds(amount) {
        if (this.balance >= amount) {
            this.balance -= amount;
            this._logTransaction('Withdrew', amount);
        } else {
            console.log('Insufficient balance for withdrawal');
        }
    }

    
    computeInterest(rate, years) {
        const interest = this.balance * Math.pow((1 + rate / 100), years) - this.balance;
        console.log(`Calculated interest for ${years} years: ${interest}`);
        return interest;
    }

    
    _logTransaction(type, amount) {
        console.log(`${type} ${amount}. Current balance: ${this.balance}`);
    }
}
