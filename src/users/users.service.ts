import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './interfaces/user.interface';
import { NatsService } from '../nats/nats.service';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel('User') private readonly userModel: Model<User>,
    private readonly natsService: NatsService,
  ) {}

  async createUser(user: User): Promise<User> {
    const createdUser = new this.userModel(user);
    const savedUser = await createdUser.save();
    const message = {
      userId: savedUser._id,
    };

    const natsClient = this.natsService.getClient();
    natsClient.publish('userCreated', JSON.stringify(message));
    return savedUser;
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  async findOne(id: string): Promise<User> {
    return this.userModel.findById(id).exec();
  }

  async update(id: string, user: User): Promise<User> {
    return this.userModel.findByIdAndUpdate(id, user, { new: true }).exec();
  }

  async remove(id: string): Promise<User> {
    return this.userModel.findByIdAndRemove(id).exec();
  }
}
