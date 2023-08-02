export class Payment {
    constructor(type, amount, createdAt) {
        this.type = type;
        this.amount = amount;
        this.createdAt = createdAt;
    }
    getDetails() {
        return `You received the payment of INR ${this.amount} on Date ${this.createdAt.toISOString()}`;
    }
}
