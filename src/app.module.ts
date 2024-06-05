import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoggerMiddleware } from './common/logger.middleware';
import { AuthModule } from './auth/auth.module';
import { ScoresModule } from './scores/scores.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DATABASE_HOST || 'localhost',
      port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
      username: process.env.DATABASE_USER || 'yourusername',
      password: process.env.DATABASE_PASSWORD || 'yourpassword',
      database: process.env.DATABASE_NAME || 'leaderboard',
      autoLoadEntities: true,
      synchronize: true,
    }),
    AuthModule,
    ScoresModule,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
