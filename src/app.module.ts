import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { NatsService } from './nats/nats.service';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/user-service', {
      useNewUrlParser: true,
    }),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService, NatsService],
})
export class AppModule {}
