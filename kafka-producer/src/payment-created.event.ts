export class PaymentCreatedEvent {
  constructor(
    public readonly paymentId: string,
    public readonly userId: string,
    public readonly amount: number,
  ) {}

  toString() {
    return JSON.stringify({
      paymentId: this.paymentId,
      userId: this.userId,
      amount: this.amount,
    });
  }
}
