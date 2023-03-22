import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CreatePaymentRequest } from './create-payment-request.dto';

@Controller('/payment')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  createPayment(@Body() createPaymentRequest: CreatePaymentRequest) {
    return this.appService.createPayment(createPaymentRequest);
  }
}
