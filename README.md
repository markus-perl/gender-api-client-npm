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
my-project$ npm install gender-api-client --save
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
const genderApiClient = new index.GenderApiClient("your API key");

try {
  const name = genderApiClient.getByFirstName('elisabeth');
  if ($name.genderFound()) {
      alert($name.getGender()); // will return "female" (possible values: male, female, unknown)
  }
}
catch(e) {
  console.log('Error:', e);
}
