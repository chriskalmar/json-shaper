
import {
  isObject,
} from './json-shaper'


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

