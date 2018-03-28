Gender-API.com JavaScript and TypeScript Client
=========================

About
------------
Gender-API.com JavaScript and TypeScript Client.

Homepage: <https://gender-api.com>

FAQ: <https://gender-api.com/en/frequently-asked-questions>

API Docs: <https://gender-api.com/en/api-docs>

Contact: <https://gender-api.com/en/contact>

Installation
------------

```
my-project$ npm i gender-api.com-client --save
```

API-Key
-----------
Get a free API key here: <https://gender-api.com/en/account>

Testing
------------

```
gender-api-client-npm$ KEY=<your API key> npm run test
```

TypeScript
==========
can also be used with Angular 2+.

Simple Usage
---------

```js
import {GenderApiClient, GenderApiClientResultSingleName} from "gender-api.com-client";

const genderApiClient = new index.GenderApiClient("your API key");

try {
    genderApiClient.getByFirstName('theresa', (response: GenderApiClientResultSingleName) => {
    console.log(response.gender); //female
    console.log(response.accuracy); //98
    });
  
    genderApiClient.getByFirstNameAndCountry('john', 'US', (response: GenderApiClientResultSingleName) => {
      console.log(response.gender); //male
      console.log(response.accuracy); //99
    });
}
catch(e) {
  console.log('Error:', e);
}
````

Split First and Last Name
-------------------------

```js
import {GenderApiClient, GenderApiClientResultSplit} from "gender-api.com-client";

const genderApiClient = new index.GenderApiClient("your API key");

try {
    genderApiClient.getByFirstNameAndLastName('theresa miller', (response: GenderApiClientResultSplit) => {
    console.log(response.gender); //female
    console.log(response.accuracy); //98
    console.log(response.first_name); //Theresa
    console.log(response.last_name); //Miller
    });
  
    genderApiClient.getByFirstNameAndLastNameAndCountry('john johnson', 'US', (response: GenderApiClientResultSplit) => {
      console.log(response.gender); //male
      console.log(response.accuracy); //99
      console.log(response.first_name); //John
      console.log(response.last_name); //Johnson
    });
}
catch(e) {
  console.log('Error:', e);
}
````


Email Address
-------------------------

```js
import {GenderApiClient, GenderApiClientResultEmailAddress} from "gender-api.com-client";

const genderApiClient = new index.GenderApiClient("your API key");

try {
    genderApiClient.getByEmailAddress('theresa.miller@gmail.com', (response: GenderApiClientResultEmailAddress) => {
    console.log(response.gender); //female
    console.log(response.accuracy); //98
    console.log(response.first_name); //Theresa
    console.log(response.last_name); //Miller
    });
  
    genderApiClient.getByEmailAddressAndCountry('john.johnson44@hotmail.com', 'US', (response: GenderApiClientResultEmailAddress) => {
      console.log(response.gender); //male
      console.log(response.accuracy); //99
      console.log(response.first_name); //John
      console.log(response.last_name); //Johnson
    });
}
catch(e) {
  console.log('Error:', e);
}
````


Statistics
-------------------------

```js
import {GenderApiClient, GenderApiClientResultStats} from "gender-api.com-client";

const genderApiClient = new index.GenderApiClient("your API key");

try {
    genderApiClient.getStats((response: GenderApiClientResultStats) => {
    console.log(response.is_limit_reached); //false
    console.log(response.remaining_requests); //Available Credits
    console.log(response.amount_month_start); //Credits at the start of the month
    console.log(response.amount_month_bought); //Credits bought this month
    });
    
}
catch(e) {
  console.log('Error:', e);
}
````