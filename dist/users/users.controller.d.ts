import { UsersService } from './users.service';
import { User } from './interfaces/user.interface';
export declare class UsersController {
    private readonly userService;
    constructor(userService: UsersService);
    createUser(user: User): any;
}
