"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NatsModule = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const nats_service_1 = require("./nats.service");
let NatsModule = class NatsModule {
};
NatsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            microservices_1.ClientsModule.register([
                {
                    name: 'NATS_CLIENT',
                    transport: microservices_1.Transport.NATS,
                    options: {
                        url: 'nats://localhost:4222',
                    },
                },
            ]),
        ],
        exports: [microservices_1.ClientsModule],
        providers: [nats_service_1.NatsService],
    })
], NatsModule);
exports.NatsModule = NatsModule;
//# sourceMappingURL=nats.module.js.map