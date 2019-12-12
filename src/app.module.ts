import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerModule } from 'nestjs-pino'
import { v4 } from 'uuid'

@Module({
  imports: [
      LoggerModule.forRoot({
        genReqId: () => v4().toString()
      })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
