import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { express as voyagerMiddleware } from 'graphql-voyager/middleware';
import { ValidationPipe } from './pipes/validation.pipe';

const port = process.env.PORT || 3000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.use('/voyager', voyagerMiddleware({ endpointUrl: '/graphql' }));
  // su dung global pipe
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
  Logger.log(`🚀 Server running on http://localhost:${port}`, 'Bootstrap');
}
bootstrap();
