import {GenderApiClientResultSingleName} from "./result/single-name";
import {GenderApiClientResultMultipleNames} from "./result/multiple-names";
import {GenderApiClientResultSplit} from "./result/split";
import {GenderApiClientResultStats} from "./result/stats";
import {GenderApiClientResultEmailAddress} from "./result/email-address";

export class GenderApiClient {

    public host = 'https://gender-api.com';

    /**
     * @param {string} apiKey
     */
    constructor(public apiKey: string) {
    }

    /**
     * @param {string} firstName
     * @param {Function} callback
     * @throws Exception
     * @return void
     */
    public getByFirstName(firstName: string, callback: Function): void {
        return this.getByFirstNameAndCountry(firstName, '', callback);
    }

    /**
     * @param {string} firstName
     * @param {string} country
     * @param {Function} callback
     * @throws Exception
     * @return void
     */
    public getByFirstNameAndCountry(firstName: string, country: string, callback: Function): void {
        this.performRequest('get', {
            name: firstName,
            country: country
        }, (json: any) => {
            callback(<GenderApiClientResultSingleName> json);
        });
    }

    /**
     * @param {string[]} firstNames
     * @param {string} country
     * @param {Function} callback
     * @throws Exception
     * @return void
     */
    public getByMultipleNamesAndCountry(firstNames: string[], country: string, callback: Function): void {
        this.performRequest('get', {
            name: firstNames.join(';'),
            country: country
        }, (json: any) => {
            let names: GenderApiClientResultSingleName[] = [];
            for (let name of json.result) {
                names.push(<GenderApiClientResultSingleName> name);
            }
            callback(new GenderApiClientResultMultipleNames(names));
        });
    }

    /**
     * @param {string} fullName
     * @param {Function} callback
     * @throws Exception
     * @return void
     */
    public getByFirstNameAndLastName(fullName: string, callback: Function): void {
        this.getByFirstNameAndLastNameAndCountry(fullName, '', callback);
    }

    /**
     * @param {string} fullName
     * @param {string} country
     * @param {Function} callback
     * @throws Exception
     * @return void
     */
    public getByFirstNameAndLastNameAndCountry(fullName: string, country: string, callback: Function): void {
        this.performRequest('get', {
            split: fullName,
            country: country
        }, (json: any) => {
            callback(<GenderApiClientResultSplit> json);
        });
    }

    /**
     * @param {string} emailAddress
     * @param {Function} callback
     * @throws Exception
     * @return void
     */
    public getByEmailAddress(emailAddress: string, callback: Function): void {
        this.getByEmailAddressAndCountry(emailAddress, '', callback);
    }

    /**
     * @param {string} emailAddress
     * @param {string} country
     * @param {Function} callback
     * @throws Exception
     * @return void
     */
    public getByEmailAddressAndCountry(emailAddress: string, country: string, callback: Function): void {
        this.performRequest('get', {
            email: emailAddress,
            country: country
        }, (json: any) => {
            callback(<GenderApiClientResultEmailAddress> json);
        });
    }

    /**
     * @param {Function} callback
     * @throws Exception
     * @return void
     */
    public getStats(callback: Function): void {
        this.performRequest('get-stats', {}, (json: any) => {
            callback(<GenderApiClientResultStats> json);
        });
    }

    /**
     * @param {string} method
     * @param data
     * @param {Function} callback
     */
    private performRequest(method: string, data: any, callback: Function): void {

        let formData = '';
        const dataKeys = Object.keys(data);
        for (let i = 0; i < dataKeys.length; i++) {
            formData += '&' + dataKeys[i] + '=' + encodeURI(data[dataKeys[i]]);
        }

        const endpoint = '/' + method + '?key=' + this.apiKey + formData;

        const https = require('https');
        https.get(this.host + endpoint, (resp: any) => {
            let data = '';

            resp.on('data', (chunk: string) => {
                data += chunk;
            });

            resp.on('end', () => {
                let json = JSON.parse(data);

                if (json.errmsg) {
                    throw new Error(json.errno + ': ' + json.errmsg);
                }

                callback(json);
            });

        }).on("error", (err: any) => {
            throw new Error(err.message);
        });
    }
}