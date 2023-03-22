import { Controller, Get } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { AppService } from './app.service';
import { PaymentCreatedEvent } from './payment-created.event';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @EventPattern('duel-payment')
  handlePaymentCreated(data: PaymentCreatedEvent) {
    this.appService.handlePaymentCreated(data);
  }
}
