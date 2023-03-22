export class PaymentCreatedEvent {
  constructor(
    public readonly paymentId: string,
    public readonly userId: string,
    public readonly amount: number,
  ) {}
}
