"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NatsService = void 0;
const common_1 = require("@nestjs/common");
const node_nats_streaming_1 = require("node-nats-streaming");
let NatsService = class NatsService {
    connect(clusterId, clientId, url) {
        return new Promise((resolve, reject) => {
            this.client = (0, node_nats_streaming_1.connect)(clusterId, clientId, { url });
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
    getClient() {
        if (!this.client) {
            throw new Error('NATS client not initialized');
        }
        return this.client;
    }
};
NatsService = __decorate([
    (0, common_1.Injectable)()
], NatsService);
exports.NatsService = NatsService;
//# sourceMappingURL=nats.service.js.map