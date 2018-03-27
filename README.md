Gender-API.com JavaScript and TypeScript NPM Client
=========================

About
------------
Gender-API.com JavaScript and TypeScript NPM Client.

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

Simple Usage
---------

```js
import {GenderApiClientResultSingleName} from "gender-api.com-client/dist/lib/Result/single-name";
import {GenderApiClient} from "gender-api.com-client";

const genderApiClient = new index.GenderApiClient("your API key");

try {
  genderApiClient.getByFirstName(firstName, (response: GenderApiClientResultSingleName) => {
      console.log(response.gender);
  });
}
catch(e) {
  console.log('Error:', e);
}
