var Types = require('face-types')({
    isRequired: true,
    location: 'JSON',
    mdouleName: 'Response'
})
var {
    array, bool, number, object, string, symbol,
    any, element, node,
    arrayOf, instanceOf, objectOf,
    oneOf, oneOfType, shape
} = Types

var LooseTypes = require('face-types')({
    isRequired: false,
    location: 'JSON',
    mdouleName: 'Response'
})

document.getElementById('simple-demo').addEventListener('click', function () {
        // or Types.checkPropTypes
        Types.check(
        {
            // or name: Types.setring
            name: string,
            age: number
        },
        {
            name: 'nimo', // pass
            age: '26', // fail
            weight: LooseTypes.age
        },
        // "JSON",
        // "Response"
    )
})
