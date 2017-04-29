
// import shaper
import { shaper } from '../lib/json-shaper';
import { fixtureInput } from '../test/fixtures/data'


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
const result = fixtureInput.map(transformer)

// profit
console.log(JSON.stringify(result, null, 2)); // eslint-disable-line no-console
