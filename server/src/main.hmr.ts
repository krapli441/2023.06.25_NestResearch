import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.enableCors(); // 개발 중에 CORS 이슈를 해결하기 위해 CORS를 활성화한다.
  await app.listen(3000);
}

bootstrap();
