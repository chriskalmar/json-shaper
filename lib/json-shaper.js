


// return the shaper function as string based on given schema
export const shaperFunction = (schema) => {

  let functionCode = ''

  // start recursion
  recursiveWalk(schema)

  // write function code recursively
  function recursiveWalk(current, propertyName) {

    // if it's an object
    if (isObject(current)) {

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



// check whether it is an object or not
function isObject(obj) {
  return obj !== null && (typeof obj === 'object' || typeof obj === 'function')
}



