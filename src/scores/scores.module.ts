import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ScoresService } from './scores.service';
import { ScoresController } from './scores.controller';
import { Score } from './score.entity';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Score]),
    AuthModule, // Import AuthModule to ensure JwtAuthGuard and other auth-related providers are available
  ],
  providers: [ScoresService],
  controllers: [ScoresController],
})
export class ScoresModule {}
