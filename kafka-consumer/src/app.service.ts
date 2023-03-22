import { Injectable } from '@nestjs/common';
import { PaymentCreatedEvent } from './payment-created.event';

@Injectable()
export class AppService {
  handlePaymentCreated(paymentCreatedEvent: PaymentCreatedEvent) {
    console.log(paymentCreatedEvent);
  }
}
