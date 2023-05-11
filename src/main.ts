import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  await app.listen(4444, () => {
    console.log('Server is running on port 4444');
  });
}
bootstrap();
