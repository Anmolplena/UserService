import { ClientProxy } from '@nestjs/microservices';
export declare class NatsService {
    private readonly client;
    constructor();
    getClient(): ClientProxy;
}
