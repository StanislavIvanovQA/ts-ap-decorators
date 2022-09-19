import axios from "axios";
import {step} from "allure-decorators";

export class Client {
    private static url = 'https://countries.trevorblades.com/';
    private static getOptions = (url, query) => {
        return {
            url,
            method: 'POST',
            data: query,
        }
    };

    public static sendQuery(query) {
        return this.sendRequest(this.getOptions(this.url, query));
    }

    @step(`Sending request`)
    private static async sendRequest(options) {
        let response;
        let data;

        response = await axios(options);
        data = response.data;
        // await allure.createStep(`Sending request to url: ${options.url}
        //  With query ${JSON.stringify(options.data)}`, async () => {
        //     response = await axios(options);
        //     data = response.data;
        // })();
        return data;
    }
}
