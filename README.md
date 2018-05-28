Official Gender-API.com JavaScript And TypeScript Client
=========================

This library is still beta. If you experience some problems or if you have some questions feel free to contact us.

About
------------
Gender-API.com JavaScript and TypeScript client.

Homepage: <https://gender-api.com>

FAQ: <https://gender-api.com/en/frequently-asked-questions>

API Docs: <https://gender-api.com/en/api-docs>

Contact: <https://gender-api.com/en/contact>

Installation
------------

```
my-project$ npm i gender-api.com-client --save
```

Usage
------------
#### [TypeScript Examples](#typescript)
#### [JavaScript Example](#javascript)

API-Key
-----------
Get a free API key here: <https://gender-api.com/en/account>

## TypeScript
can also be used with Angular 2+.

### Simple Usage

```typescript
import {Client as GenderApiClient, ResultSingleName} from "gender-api.com-client";

const genderApiClient = new GenderApiClient("your API key");

try {
    genderApiClient.getByFirstName('theresa', (response: ResultSingleName) => {
      console.log(response.gender); //female
      console.log(response.accuracy); //98
    });
  
    genderApiClient.getByFirstNameAndCountry('john', 'US', (response: ResultSingleName) => {
      console.log(response.gender); //male
      console.log(response.accuracy); //99
    });
}
catch(e) {
  console.log('Error:', e);
}
```

### Split First and Last Name

```typescript
import {Client as GenderApiClient, ResultSplit} from "gender-api.com-client";

const genderApiClient = new GenderApiClient("your API key");

try {
    genderApiClient.getByFirstNameAndLastName('theresa miller', (response: ResultSplit) => {
      console.log(response.gender); //female
      console.log(response.accuracy); //98
      console.log(response.first_name); //Theresa
      console.log(response.last_name); //Miller
    });
  
    genderApiClient.getByFirstNameAndLastNameAndCountry('john johnson', 'US', (response: ResultSplit) => {
      console.log(response.gender); //male
      console.log(response.accuracy); //99
      console.log(response.first_name); //John
      console.log(response.last_name); //Johnson
    });
}
catch(e) {
  console.log('Error:', e);
}
```

### Email Address

```typescript
import {Client as GenderApiClient, ResultEmailAddress} from "gender-api.com-client";

const genderApiClient = new GenderApiClient("your API key");

try {
    genderApiClient.getByEmailAddress('theresa.miller@gmail.com', (response: ResultEmailAddress) => {
      console.log(response.gender); //female
      console.log(response.accuracy); //98
      console.log(response.first_name); //Theresa
      console.log(response.last_name); //Miller
    });
  
    genderApiClient.getByEmailAddressAndCountry('john.johnson44@hotmail.com', 'US', (response: ResultEmailAddress) => {
      console.log(response.gender); //male
      console.log(response.accuracy); //99
      console.log(response.first_name); //John
      console.log(response.last_name); //Johnson
    });
}
catch(e) {
  console.log('Error:', e);
}
```

### Statistics

```typescript
import {Client as GenderApiClient, ResultStats} from "gender-api.com-client";

const genderApiClient = new GenderApiClient("your API key");

try {
    genderApiClient.getStats((response: ResultStats) => {
      console.log(response.is_limit_reached); //false
      console.log(response.remaining_requests); //Available Credits
      console.log(response.amount_month_start); //Credits at the start of the month
      console.log(response.amount_month_bought); //Credits bought this month
    });
    
}
catch(e) {
  console.log('Error:', e);
}
```

## JavaScript

### Simple Usage

```javascript
try {
    var GenderApi = require('gender-api.com-client');

    var genderApiClient = new GenderApi.Client('your api key');

    genderApiClient.getByFirstName('theresa', function (response) {
        console.log(response.gender); //female
        console.log(response.accuracy); //98
    });

    genderApiClient.getByFirstNameAndCountry('john', 'US', function (response) {
        console.log(response.gender); //male
        console.log(response.accuracy); //99
    });

}
catch(e) {
    console.log('Error:', e);
}
```

### Split First and Last Name

```javascript
try {
    var GenderApi = require('gender-api.com-client');

    var genderApiClient = new GenderApi.Client('your api key');

    genderApiClient.getByFirstNameAndLastName('theresa miller', function (response) {
        console.log(response.gender); //female
        console.log(response.accuracy); //98
        console.log(response.first_name); //Theresa
        console.log(response.last_name); //Miller
    });

    genderApiClient.getByFirstNameAndLastNameAndCountry('john johnson', 'US', function (response) {
        console.log(response.gender); //male
        console.log(response.accuracy); //99
        console.log(response.first_name); //John
        console.log(response.last_name); //Johnson
    });
}
catch(e) {
    console.log('Error:', e);
}
```

### Email Address

```javascript
try {
    var GenderApi = require('gender-api.com-client');

    var genderApiClient = new GenderApi.Client('your api key');

    genderApiClient.getByEmailAddress('theresa.miller@gmail.com', function (response) {
        console.log(response.gender); //female
        console.log(response.accuracy); //98
        console.log(response.first_name); //Theresa
        console.log(response.last_name); //Miller
    });

    genderApiClient.getByEmailAddressAndCountry('john.johnson44@hotmail.com', 'US', function (response) {
        console.log(response.gender); //male
        console.log(response.accuracy); //99
        console.log(response.first_name); //John
        console.log(response.last_name); //Johnson
    });
}
catch (e) {
    console.log('Error:', e);
}
```

### Statistics

```javascript
try {
    var GenderApi = require('gender-api.com-client');

    var genderApiClient = new GenderApi.Client('your api key');

    genderApiClient.getStats(function (response) {
        console.log(response.is_limit_reached); //false
        console.log(response.remaining_requests); //Available Credits
        console.log(response.amount_month_start); //Credits at the start of the month
        console.log(response.amount_month_bought); //Credits bought this month
    });
}
catch (e) {
    console.log('Error:', e);
    }
```


Testing
------------

```
gender-api-client-npm$ KEY=<your API key> npm run test
```

Build project
------------

```
gender-api-client-npm$ npm run build
```