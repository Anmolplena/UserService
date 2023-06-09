"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const nats_service_1 = require("../nats/nats.service");
let UsersService = class UsersService {
    constructor(userModel, natsService) {
        this.userModel = userModel;
        this.natsService = natsService;
    }
    async createUser(user) {
        const createdUser = new this.userModel(user);
        const savedUser = await createdUser.save();
        const message = { event: 'userCreated', data: savedUser._id };
        this.natsService.getClient().send('userEvents', message).toPromise();
        return savedUser;
    }
    async findAll() {
        return this.userModel.find().exec();
    }
    async findOne(id) {
        return this.userModel.findById(id).exec();
    }
    async update(id, user) {
        return this.userModel.findByIdAndUpdate(id, user, { new: true }).exec();
    }
    async remove(id) {
        return this.userModel.findByIdAndRemove(id).exec();
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('User')),
    __metadata("design:paramtypes", [mongoose_2.Model,
        nats_service_1.NatsService])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map