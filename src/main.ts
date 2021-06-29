import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { AppModule } from './app.module';
import * as fastifyRateLimit from 'fastify-rate-limit';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter()
  );

  app.register(fastifyRateLimit, {
    max: 25,
    timeWindow: '1 minute',
  });
  await app.listen(4000);
}
bootstrap();
