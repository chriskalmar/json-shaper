# json-shaper


[![Build Status](https://travis-ci.org/chriskalmar/json-shaper.svg?branch=master)](https://travis-ci.org/chriskalmar/json-shaper)
[![coverage](https://codecov.io/gh/chriskalmar/json-shaper/branch/master/graph/badge.svg)](https://codecov.io/gh/chriskalmar/json-shaper)
[![npm version](https://badge.fury.io/js/json-shaper.svg)](https://www.npmjs.com/package/json-shaper)

Shape a flat array into a molded json shape with deep nesting

## Installation

#### yarn
    $ yarn add json-shaper

#### npm
    $ npm install json-shaper --save

## How to use

```js
// import shaper
import { shaper } from 'json-shaper';

// load data to be transformed
import input from './data/input.js'


// define a schema to shape by
const schema = {
  id: 'id',
  firstName: 'first_name',
  lastName: 'last_name',
  workplace: {
    id: 'office_id',
    name: 'office_company_name',
    address: {
      street: 'company_street',
      postCode: 'company_postcode',
      country: 'company_cty',
    }
  },
  isActive: 'user_is_active'
}


// generate transformer function based on schema
const transformer = shaper(schema)

// transform data
const result = input.map(transformer)

// profit
console.log(JSON.stringify(result, null, 2));
```

#### If the input data looks like this:
```js
[
  {
    "id": 32,
    "first_name": "John",
    "last_name": "Flow",
    "office_id": 12,
    "office_company_name": "ACME Inc.",
    "company_street": "Rocket Street 3",
    "company_postcode": "11122",
    "company_cty": "Space City",
    "user_is_active": false
  },
  {
    "id": 100,
    "first_name": "Mike",
    "last_name": "",
    "office_id": 532,
    "office_company_name": "",
    "user_is_active": true
  },
  ...
  ...
  ...
]
```

#### json-shaper will transform it into this:
```js
[
  {
    "id": 32,
    "firstName": "John",
    "lastName": "Flow",
    "workplace": {
      "id": 12,
      "name": "ACME Inc.",
      "address": {
        "street": "Rocket Street 3",
        "postCode": "11122",
        "country": "Space City",
      }
    },
    "isActive": false
  },
  {
    "id": 100,
    "firstName": "Mike",
    "lastName": "",
    "workplace": {
      "id": 532,
      "name": "",
      "address": {}
    },
    "isActive": true
  },
  ...
  ...
  ...
]
```

## Performance / Benchmarks

        // TODO

## License

MIT License

Copyright (c) 2017 Chris Kalmar

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
