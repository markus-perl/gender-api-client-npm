"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var multiple_names_1 = require("./result/multiple-names");
var GenderApiClient = /** @class */ (function () {
    /**
     * @param {string} apiKey
     */
    function GenderApiClient(apiKey) {
        this.apiKey = apiKey;
        this.host = 'https://gender-api.com';
    }
    /**
     * @param {string} firstName
     * @param {Function} callback
     * @throws Exception
     * @return void
     */
    GenderApiClient.prototype.getByFirstName = function (firstName, callback) {
        return this.getByFirstNameAndCountry(firstName, '', callback);
    };
    /**
     * @param {string} firstName
     * @param {string} country
     * @param {Function} callback
     * @throws Exception
     * @return void
     */
    GenderApiClient.prototype.getByFirstNameAndCountry = function (firstName, country, callback) {
        this.performRequest('get', {
            name: firstName,
            country: country
        }, function (json) {
            callback(json);
        });
    };
    /**
     * @param {string[]} firstNames
     * @param {string} country
     * @param {Function} callback
     * @throws Exception
     * @return void
     */
    GenderApiClient.prototype.getByMultipleNamesAndCountry = function (firstNames, country, callback) {
        this.performRequest('get', {
            name: firstNames.join(';'),
            country: country
        }, function (json) {
            var names = [];
            for (var _i = 0, _a = json.result; _i < _a.length; _i++) {
                var name_1 = _a[_i];
                names.push(name_1);
            }
            callback(new multiple_names_1.GenderApiClientResultMultipleNames(names));
        });
    };
    /**
     * @param {string} fullName
     * @param {Function} callback
     * @throws Exception
     * @return void
     */
    GenderApiClient.prototype.getByFirstNameAndLastName = function (fullName, callback) {
        this.getByFirstNameAndLastNameAndCountry(fullName, '', callback);
    };
    /**
     * @param {string} fullName
     * @param {string} country
     * @param {Function} callback
     * @throws Exception
     * @return void
     */
    GenderApiClient.prototype.getByFirstNameAndLastNameAndCountry = function (fullName, country, callback) {
        this.performRequest('get', {
            split: fullName,
            country: country
        }, function (json) {
            callback(json);
        });
    };
    /**
     * @param {string} emailAddress
     * @param {Function} callback
     * @throws Exception
     * @return void
     */
    GenderApiClient.prototype.getByEmailAddress = function (emailAddress, callback) {
        this.getByEmailAddressAndCountry(emailAddress, '', callback);
    };
    /**
     * @param {string} emailAddress
     * @param {string} country
     * @param {Function} callback
     * @throws Exception
     * @return void
     */
    GenderApiClient.prototype.getByEmailAddressAndCountry = function (emailAddress, country, callback) {
        this.performRequest('get', {
            email: emailAddress,
            country: country
        }, function (json) {
            callback(json);
        });
    };
    /**
     * @param {Function} callback
     * @throws Exception
     * @return void
     */
    GenderApiClient.prototype.getStats = function (callback) {
        this.performRequest('get-stats', {}, function (json) {
            callback(json);
        });
    };
    /**
     * @param {string} method
     * @param data
     * @param {Function} callback
     */
    GenderApiClient.prototype.performRequest = function (method, data, callback) {
        var formData = '';
        var dataKeys = Object.keys(data);
        for (var i = 0; i < dataKeys.length; i++) {
            formData += '&' + dataKeys[i] + '=' + encodeURI(data[dataKeys[i]]);
        }
        var endpoint = '/' + method + '?key=' + this.apiKey + formData;
        var https = require('https');
        https.get(this.host + endpoint, function (resp) {
            var data = '';
            resp.on('data', function (chunk) {
                data += chunk;
            });
            resp.on('end', function () {
                var json = JSON.parse(data);
                if (json.errmsg) {
                    throw new Error(json.errno + ': ' + json.errmsg);
                }
                callback(json);
            });
        }).on("error", function (err) {
            throw new Error(err.message);
        });
    };
    return GenderApiClient;
}());
exports.GenderApiClient = GenderApiClient;
