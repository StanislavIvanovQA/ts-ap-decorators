import {Client} from "../client/Client";
import {suite, test} from '@testdeck/mocha'
import {TestQuery} from "../graphql/queries/queries";
import {expect} from "chai";
import {decorate, description} from "allure-decorators";
import {allure, MochaAllure} from "allure-mocha/runtime";

@suite
class ExampleDecoratorsSpec {

    @description('Basic green api test.')
    @test
    public async getCurrentCountryGreen() {
        const response = await Client.sendQuery(TestQuery);
        expect(response.data.country.name).to.eq('Andorra');
    }

    @description('Basic red api test.')
    @test
    public async getCurrentCountryRed() {
        const response = await Client.sendQuery(TestQuery);
        expect(response.data.country.name, `Name was not as expected, full response was: ${JSON.stringify(response.data)}`).to.eq('Not Andorra');
    }

    //this is needed for decorators to work
    public before() {
        // @ts-ignore
        decorate<MochaAllure>(allure)
    }
}
