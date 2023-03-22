import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { CreatePaymentRequest } from './create-payment-request.dto';
import { PaymentCreatedEvent } from './payment-created.event';

@Injectable()
export class AppService {
  constructor(
    @Inject('PAYMENT_SERVICE') private readonly paymentClient: ClientKafka,
  ) {}

  createPayment({ userId, paymentId, amount }: CreatePaymentRequest) {
    this.paymentClient.emit(
      'duel-payment',
      new PaymentCreatedEvent(userId, paymentId, amount),
    );
  }
}
