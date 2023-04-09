import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

import { hello } from '@pnds/common';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {
  }

  @Get()
  getHello(): string {
    console.log('nest-app >', hello()); // 추가
    return this.appService.getHello();
  }
}
