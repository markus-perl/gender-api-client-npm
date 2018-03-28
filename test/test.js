'use strict';
let index = require('../dist/index.js');
let assert = require('assert');

const genderApiClient = new index.GenderApiClient(process.env.KEY);

describe('getGender from name', function() {
    it('markus DE should return male', (done) => {
        genderApiClient.getByFirstNameAndCountry('markus', 'DE', function (response) {
            assert.equal(response.gender, 'male');
            assert.equal(response.country, 'DE');
            assert.equal(response.name_sanitized, 'Markus');
            assert.equal(response.credits_used, 1);
            done();
        });
    });

    it('sandra US should return female', (done) => {
        genderApiClient.getByFirstNameAndCountry('sandra', 'US', function (response) {
            assert.equal(response.gender, 'female');
            done();
        });
    });

    it('thomas should return male', (done) => {
        genderApiClient.getByFirstName('thomas', function (response) {
            assert.equal(response.gender, 'male');
            assert.equal(response.country, '');
            done();
        });
    });
});

describe('getGender from multiple names', function() {
    it('should return two results', (done) => {
        genderApiClient.getByMultipleNamesAndCountry(['markus', 'tanja'], 'IT', (response) => {
            assert.equal(response.names.length, 2);
            assert.equal(response.names[0].gender, 'male');
            assert.equal(response.names[0].name, 'markus');
            assert.equal(response.names[1].gender, 'female');
            assert.equal(response.names[1].name, 'tanja');
            done();
        });
    });
});

describe('getGender from email address', function() {
    it('should return male', (done) => {
        genderApiClient.getByEmailAddressAndCountry('markus.perl@gender-api.com', 'DE', (response) => {
            assert.equal(response.gender, 'male');
            assert.equal(response.country, 'DE');
            assert.equal(response.first_name, 'Markus');
            assert.equal(response.last_name, 'Perl');
            assert.equal(response.credits_used, 1);
            assert.equal(response.mail_provider, 'gender-api');
            done();
        });
    });

    it('should return female', (done) => {
        genderApiClient.getByEmailAddress('sybille@gender-api.com', (response) => {
            assert.equal(response.gender, 'female');
            assert.equal(response.country, '');
            assert.equal(response.first_name, 'Sybille');
            assert.equal(response.last_name, '');
            assert.equal(response.credits_used, 1);
            assert.equal(response.mail_provider, 'gender-api');
            done();
        });
    });
});

describe('getGender from full name', function() {
    it('should return male', (done) => {
        genderApiClient.getByFirstNameAndLastNameAndCountry('thomas meyer', 'US', (response) => {
            assert.equal(response.gender, 'male');
            assert.equal(response.country, 'US');
            assert.equal(response.first_name, 'Thomas');
            assert.equal(response.last_name, 'Meyer');
            assert.equal(response.credits_used, 1);
            done();
        });
    });

    it('should return female', (done) => {
        genderApiClient.getByFirstNameAndLastName('tina peterson', (response) => {
            assert.equal(response.gender, 'female');
            assert.equal(response.country, '');
            assert.equal(response.first_name, 'Tina');
            assert.equal(response.last_name, 'Peterson');
            assert.equal(response.credits_used, 1);
            done();
        });
    });
});

describe('getStats', function() {
    it('should return the stats', (done) => {
        genderApiClient.getStats((response) => {
            assert.equal(response.is_limit_reached, false);
            assert.ok(response.remaining_requests > 10);
            assert.ok(response.key.length > 0);
            done();
        });
    });
});