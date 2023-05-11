import { Model } from 'mongoose';
import { User } from './interfaces/user.interface';
import { NatsService } from '../nats/nats.service';
export declare class UsersService {
    private readonly userModel;
    private readonly natsService;
    constructor(userModel: Model<User>, natsService: NatsService);
    createUser(user: User): Promise<User>;
    findAll(): Promise<User[]>;
    findOne(id: string): Promise<User>;
    update(id: string, user: User): Promise<User>;
    remove(id: string): Promise<User>;
}
