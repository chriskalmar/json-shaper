

// check whether it is an object or not
export const isObject = (obj) => {
  return obj !== null && (typeof obj === 'object' || typeof obj === 'function')
}


export const isFunction = (fn) => {
  return typeof fn === 'function'
}


// map through all object keys and run a function
export const forEach = (obj, fn) => {

  const propertyNames = isObject(obj)
    ? Object.keys(obj)
    : []

  propertyNames.map((propertyName) => {
    fn(obj[propertyName], propertyName)
  })
}



// return the shaper function as string based on given schema
export const shaperFunction = (schema) => {

  let functionCode = ''

  // start recursion
  recursiveWalk(schema)

  // write function code recursively
  function recursiveWalk(current, propertyName) {

    // run extraction function if found
    if (isFunction(current)) {
      // remove istanbul coverage code
      const cleanFunctionCode = current.toString().replace(/cov_\w+\.\w.*?[,;]/g, ' ')

      functionCode += '"' + propertyName + '":  ' + cleanFunctionCode + '(data), '
    }
    // if it's an object
    else if (isObject(current)) {

      // it's not the root object
      if (propertyName) {
        // so write the property name
        functionCode += '"' + propertyName + '": '
      }

      // open object
      functionCode += '{ '

      // go through all properties and run recursion
      forEach(current, (nextProperty, nextPropertyName) => {
        recursiveWalk(nextProperty, nextPropertyName)
      })

      // close object
      functionCode += ' }'

      // only add comma if it's not the root object
      if (propertyName) {
        functionCode += ', '
      }
    }
    // otherwise it's a property only
    else {
      // assign value
      functionCode +=  '"' + propertyName + '":  data[ "' + current + '" ], '
    }
  }

  // return the function as string
  return functionCode
}



// return the shaper function as executable function based on given schema
export const shaper = (schema) => {

  // generate function
  const fnString = shaperFunction(schema)

  // generate executable function
  return new Function('data', 'require', `return ${fnString}`)
}


// default export
export default shaper
