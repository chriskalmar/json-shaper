
import {
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

