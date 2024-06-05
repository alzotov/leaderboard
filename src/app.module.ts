import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ScoresModule } from './scores/scores.module';

@Module({
  imports: [AuthModule, ScoresModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
