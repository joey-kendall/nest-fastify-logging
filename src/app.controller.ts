import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { InjectPinoLogger, Logger } from 'nestjs-pino'
import { PinoLogger } from 'nestjs-pino/dist'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService,
              @InjectPinoLogger(AppController.name) private readonly logger: PinoLogger) {}

  @Get()
  getHello(): string {
    this.logger.info('in the hello controller')
    return this.appService.getHello();
  }
}
