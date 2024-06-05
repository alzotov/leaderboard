import * as rateLimit from 'express-rate-limit';
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());

  const config = new DocumentBuilder()
    .setTitle('Game Leaderboard API')
    .setDescription('API documentation for the game leaderboard')
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('', app, document);

  app.use(
    rateLimit.rateLimit({
      windowMs: 15 * 60 * 1000,
      max: 100,
    }),
  );

  await app.listen(3000);
}
bootstrap();
