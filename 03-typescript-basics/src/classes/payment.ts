import { IFormatter } from "../model/formatter";

export class Payment implements IFormatter {
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
