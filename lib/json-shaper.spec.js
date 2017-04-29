
import {
  shaperFunction,
  isObject,
  forEach,
} from './json-shaper'

import sinon from 'sinon';



describe('isObject helper', () => {


  it('should recognize objects', () => {

    expect(isObject({})).to.be.true
    expect(isObject({ any: 'thing' })).to.be.true
    expect(isObject(['a', 'b'])).to.be.true

  })


  it('should recognize non-objects', () => {

    expect(isObject()).to.be.false
    expect(isObject(null)).to.be.false
    expect(isObject(undefined)).to.be.false
    expect(isObject('hello world')).to.be.false
    expect(isObject(7)).to.be.false

  })

})



describe('forEach helper', () => {


  it('should iterate over object keys and call a function', () => {

    const iteratee = sinon.spy()
    const obj1 = {
      a: 123,
      b: 456,
      z: 789
    }
    const obj2 = [
      'just',
      'some',
      'array'
    ]

    forEach(obj1, iteratee)
    forEach(obj2, iteratee)

    expect(iteratee.withArgs(123, 'a').calledOnce).to.be.true
    expect(iteratee.withArgs(456, 'b').calledOnce).to.be.true
    expect(iteratee.withArgs(789, 'z').calledOnce).to.be.true

    expect(iteratee.withArgs('just', '0').calledOnce).to.be.true
    expect(iteratee.withArgs('some', '1').calledOnce).to.be.true
    expect(iteratee.withArgs('array', '2').calledOnce).to.be.true

  })


  it('should skip on non-objects', () => {

    const iteratee = sinon.spy()
    const obj1 = 'test'
    const obj2 = 123
    const obj3 = null
    const obj4 = undefined

    forEach(obj1, iteratee)
    forEach(obj2, iteratee)
    forEach(obj3, iteratee)
    forEach(obj4, iteratee)

    expect(iteratee.callCount).to.equal(0)

  })

})



describe('shaperFunction', () => {

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

  const fnCode = shaperFunction(schema)

  it('should generate function code based on a schema', () => {

    const schema2 = {}
    const schema3 = { someKey: 'some_key_in_source_object'}

    const fnCode2 = shaperFunction(schema2)
    const fnCode3 = shaperFunction(schema3)

    expect(fnCode).to.equal(
      '{ "id":  data[ "id" ], "firstName":  data[ "first_name" ], "lastName":  data[ "last_name" ], ' +
      '"workplace": { "id":  data[ "office_id" ], "name":  data[ "office_company_name" ], "address": ' +
      '{ "street":  data[ "company_street" ], "postCode":  data[ "company_postcode" ], "country":  ' +
      'data[ "company_cty" ],  },  }, "isActive":  data[ "user_is_active" ],  }'
    )

    expect(fnCode2).to.equal('{  }')

    expect(fnCode3).to.equal('{ "someKey":  data[ "some_key_in_source_object" ],  }')
  })


})

