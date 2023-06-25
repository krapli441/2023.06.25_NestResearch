import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import path, { join } from 'path';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useStaticAssets(join(__dirname, '..', 'public/build')); // 클라이언트 파일을 제공하기 위해 정적 파일 경로를 생성함
  await app.listen(3000); // 서버를 3000번 포트에서 실행함.
}
bootstrap();
