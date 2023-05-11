import { Injectable } from '@nestjs/common';
import { Stan, connect } from 'node-nats-streaming';

@Injectable()
export class NatsService {
  private client: Stan;

  connect(clusterId: string, clientId: string, url: string): Promise<void> {
    return new Promise((resolve, reject) => {
      this.client = connect(clusterId, clientId, { url });

      this.client.on('connect', () => {
        console.log('Connected to NATS');
        resolve();
      });

      this.client.on('error', (err) => {
        console.error('Failed to connect to NATS:', err);
        reject(err);
      });
    });
  }

  getClient(): Stan {
    if (!this.client) {
      throw new Error('NATS client not initialized');
    }
    return this.client;
  }
}
