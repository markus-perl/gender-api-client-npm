import { genderApiClientCallback } from "./callback";
export declare class GenderApiClient {
    apiKey: string;
    host: string;
    /**
     * @param {string} apiKey
     */
    constructor(apiKey: string);
    /**
     * @param {string} firstName
     * @param {genderApiClientCallback} callback
     * @throws Exception
     * @return void
     */
    getByFirstName(firstName: string, callback: genderApiClientCallback): void;
    /**
     * @param {string} firstName
     * @param {string} country
     * @param {genderApiClientCallback} callback
     * @throws Exception
     * @return void
     */
    getByFirstNameAndCountry(firstName: string, country: string, callback: genderApiClientCallback): void;
    /**
     * @param {string[]} firstNames
     * @param {string} country
     * @param {genderApiClientCallback} callback
     * @throws Exception
     * @return void
     */
    getByMultipleNamesAndCountry(firstNames: string[], country: string, callback: genderApiClientCallback): void;
    /**
     * @param {string} fullName
     * @param {genderApiClientCallback} callback
     * @throws Exception
     * @return void
     */
    getByFirstNameAndLastName(fullName: string, callback: genderApiClientCallback): void;
    /**
     * @param {string} fullName
     * @param {string} country
     * @param {genderApiClientCallback} callback
     * @throws Exception
     * @return void
     */
    getByFirstNameAndLastNameAndCountry(fullName: string, country: string, callback: genderApiClientCallback): void;
    /**
     * @param {string} emailAddress
     * @param {genderApiClientCallback} callback
     * @throws Exception
     * @return void
     */
    getByEmailAddress(emailAddress: string, callback: genderApiClientCallback): void;
    /**
     * @param {string} emailAddress
     * @param {string} country
     * @param {genderApiClientCallback} callback
     * @throws Exception
     * @return void
     */
    getByEmailAddressAndCountry(emailAddress: string, country: string, callback: genderApiClientCallback): void;
    /**
     * @param {genderApiClientCallback} callback
     * @throws Exception
     * @return void
     */
    getStats(callback: genderApiClientCallback): void;
    /**
     * @param {string} method
     * @param data
     * @param {Function} callback
     */
    private performRequest(method, data, callback);
}
