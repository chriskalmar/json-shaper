
export const fixtureInput = [
  {
    id: 32,
    first_name: 'John',
    last_name: 'Dow',
    office_id: 12,
    office_company_name: 'ACME Inc.',
    company_street: 'Any Street 123',
    company_postcode: '98765',
    company_cty: 'Delaware',
    user_is_active: false
  },
  {
    id: 100,
    first_name: 'Mike',
    last_name: '',
    office_id: 532,
    office_company_name: '',
    user_is_active: true
  },
  {
    id: 872,
    first_name: 'Jane',
    last_name: 'Dot',
    office_id: 152,
    office_company_name: 'Super Corp.',
    company_street: 'Mocha Street 2/3',
    company_postcode: '8278',
    company_cty: 'Berlin',
    user_is_active: true,
    private: 'data'
  },
  {
  },
  {
    unrelated: 'data'
  },
  {
    random: 'input',
    ignore: 'this',
    id: 99999
  }
]



export const fixtureOutput = [
  {
    id: 32,
    firstName: 'John',
    lastName: 'Dow',
    workplace: {
      id: 12,
      name: 'ACME Inc.',
      address: {
        street: 'Any Street 123',
        postCode: '98765',
        country: 'Delaware',
      }
    },
    isActive: false
  },
  {
    id: 100,
    firstName: 'Mike',
    lastName: '',
    workplace: {
      id: 532,
      name: '',
      address: {
        street: undefined,
        postCode: undefined,
        country: undefined,
      }
    },
    isActive: true
  },
  {
    id: 872,
    firstName: 'Jane',
    lastName: 'Dot',
    workplace: {
      id: 152,
      name: 'Super Corp.',
      address: {
        street: 'Mocha Street 2/3',
        postCode: '8278',
        country: 'Berlin'
      }
    },
    isActive: true
  },
  {
    id: undefined,
    firstName: undefined,
    lastName: undefined,
    workplace: {
      id: undefined,
      name: undefined,
      address: {
        street: undefined,
        postCode: undefined,
        country: undefined,
      }
    },
    isActive: undefined
  },
  {
    id: undefined,
    firstName: undefined,
    lastName: undefined,
    workplace: {
      id: undefined,
      name: undefined,
      address: {
        street: undefined,
        postCode: undefined,
        country: undefined,
      }
    },
    isActive: undefined
  },
  {
    id: 99999,
    firstName: undefined,
    lastName: undefined,
    workplace: {
      id: undefined,
      name: undefined,
      address: {
        street: undefined,
        postCode: undefined,
        country: undefined,
      }
    },
    isActive: undefined
  }
]
