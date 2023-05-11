"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const nats_service_1 = require("./nats/nats.service");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const natsService = app.get(nats_service_1.NatsService);
    await natsService.connect('test-cluster', 'user-service', 'nats://localhost:4222');
    await app.listen(4444, () => {
        console.log('Server is running on port 4444');
    });
}
bootstrap();
//# sourceMappingURL=main.js.map