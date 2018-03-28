export declare class Client {
    apiKey: string;
    host: string;
    /**
     * @param {string} apiKey
     */
    constructor(apiKey: string);
    /**
     * @param {string} firstName
     * @param {Function} callback
     * @throws Exception
     * @return void
     */
    getByFirstName(firstName: string, callback: Function): void;
    /**
     * @param {string} firstName
     * @param {string} country
     * @param {Function} callback
     * @throws Exception
     * @return void
     */
    getByFirstNameAndCountry(firstName: string, country: string, callback: Function): void;
    /**
     * @param {string[]} firstNames
     * @param {string} country
     * @param {Function} callback
     * @throws Exception
     * @return void
     */
    getByMultipleNamesAndCountry(firstNames: string[], country: string, callback: Function): void;
    /**
     * @param {string} fullName
     * @param {Function} callback
     * @throws Exception
     * @return void
     */
    getByFirstNameAndLastName(fullName: string, callback: Function): void;
    /**
     * @param {string} fullName
     * @param {string} country
     * @param {Function} callback
     * @throws Exception
     * @return void
     */
    getByFirstNameAndLastNameAndCountry(fullName: string, country: string, callback: Function): void;
    /**
     * @param {string} emailAddress
     * @param {Function} callback
     * @throws Exception
     * @return void
     */
    getByEmailAddress(emailAddress: string, callback: Function): void;
    /**
     * @param {string} emailAddress
     * @param {string} country
     * @param {Function} callback
     * @throws Exception
     * @return void
     */
    getByEmailAddressAndCountry(emailAddress: string, country: string, callback: Function): void;
    /**
     * @param {Function} callback
     * @throws Exception
     * @return void
     */
    getStats(callback: Function): void;
    /**
     * @param {string} method
     * @param data
     * @param {Function} callback
     */
    private performRequest(method, data, callback);
}
