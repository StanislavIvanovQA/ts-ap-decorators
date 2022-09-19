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
Object.defineProperty(exports, "__esModule", { value: true });
const Client_1 = require("../client/Client");
const mocha_1 = require("@testdeck/mocha");
const queries_1 = require("../graphql/queries/queries");
const chai_1 = require("chai");
const allure_decorators_1 = require("allure-decorators");
const runtime_1 = require("allure-mocha/runtime");
let ExampleDecoratorsSpec = class ExampleDecoratorsSpec {
    async getCurrentCountryGreen() {
        const response = await Client_1.Client.sendQuery(queries_1.TestQuery);
        chai_1.expect(response.data.country.name).to.eq('Andorra');
    }
    async getCurrentCountryRed() {
        const response = await Client_1.Client.sendQuery(queries_1.TestQuery);
        chai_1.expect(response.data.country.name, `Name was not as expected, full response was: ${JSON.stringify(response.data)}`).to.eq('Not Andorra');
    }
    before() {
        allure_decorators_1.decorate(runtime_1.allure);
    }
};
__decorate([
    allure_decorators_1.description('Basic green api test.'),
    mocha_1.test,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ExampleDecoratorsSpec.prototype, "getCurrentCountryGreen", null);
__decorate([
    allure_decorators_1.description('Basic red api test.'),
    mocha_1.test,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ExampleDecoratorsSpec.prototype, "getCurrentCountryRed", null);
ExampleDecoratorsSpec = __decorate([
    mocha_1.suite
], ExampleDecoratorsSpec);
//# sourceMappingURL=example.decorators.spec.js.map