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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
const axios_1 = __importDefault(require("axios"));
const allure_decorators_1 = require("allure-decorators");
class Client {
    static sendQuery(query) {
        return this.sendRequest(this.getOptions(this.url, query));
    }
    static async sendRequest(options) {
        let response;
        let data;
        response = await axios_1.default(options);
        data = response.data;
        return data;
    }
}
Client.url = 'https://countries.trevorblades.com/';
Client.getOptions = (url, query) => {
    return {
        url,
        method: 'POST',
        data: query,
    };
};
__decorate([
    allure_decorators_1.step(`Sending request`),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], Client, "sendRequest", null);
exports.Client = Client;
//# sourceMappingURL=Client.js.map