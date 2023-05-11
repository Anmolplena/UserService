import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NatsService } from './nats/nats.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const natsService = app.get(NatsService);
  await natsService.connect(
    'test-cluster',
    'user-service',
    'nats://localhost:4222',
  );

  await app.listen(4444, () => {
    console.log('Server is running on port 4444');
  });
}
bootstrap();
