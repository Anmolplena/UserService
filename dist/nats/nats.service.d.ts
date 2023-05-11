import { Stan } from 'node-nats-streaming';
export declare class NatsService {
    private client;
    connect(clusterId: string, clientId: string, url: string): Promise<void>;
    getClient(): Stan;
}
