import { IFormatter } from "../model/formatter.js";

export class Invoice implements IFormatter {
  constructor(
    private type: string,
    private amount: number,
    private createdAt: Date
  ) {}

  getDetails() {
    return `You received the payment of INR ${
      this.amount
    } on Date ${this.createdAt.toISOString()}`;
  }
}
