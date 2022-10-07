import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/hello') //endpoint
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('bsm') //endpoint
  getBSM(): string {
    return this.appService.getBSM();
  }
  @Get('objetivo') //endpoint
  getObjetivos(): string {
    return this.appService.getObjetivo();
  }
}
