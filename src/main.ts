import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { express as voyagerMiddleware } from 'graphql-voyager/middleware';
import { ValidationPipe } from './pipes/validation.pipe';

declare const module: any;
const port = process.env.PORT || 3001;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.use('/voyager', voyagerMiddleware({ endpointUrl: '/graphql' }));
  // su dung global pipe
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(port);
  Logger.log(`🚀 Server running on http://localhost:${port}`, 'Bootstrap');
  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
