var PropTypes = require('prop-types')
var createPropType = function (settings = {}) {
    const TempPropTypesCheckPropTypes = PropTypes.checkPropTypes
    const proxyCheckPropTypes = function (...arg) {
        let checkSettings = {}
        switch (typeof arg[2]) {
            case 'string':
                checkSettings.location = arg[2]
            break
            case 'object':
                checkSettings = location
            break
            default:
                checkSettings.location = settings.location
        }
        switch (typeof arg[3]) {
            case 'string':
                checkSettings.mdouleName = arg[3]
            break
            default:
                checkSettings.mdouleName = settings.mdouleName
        }

        if (typeof arg[3] === 'undefined') {
            arg[3] = settings.mdouleName
        }
        return TempPropTypesCheckPropTypes.apply(PropTypes, [
            arg[0],
            arg[1],
            checkSettings.location,
            checkSettings.mdouleName
        ])
    }
    let output
    if (settings.isRequired) {
        var Types = {}
        Object.keys(PropTypes).forEach(function (key) {
            switch(key) {
                case 'array':
                case 'bool':
                case 'number':
                case 'object':
                case 'string':
                case 'symbol':
                case 'any':
                case 'element':
                case 'node':
                    if (settings.isRequired) {
                        return Types[key] = PropTypes[key].isRequired
                    }
                    else {
                        Types[key] = PropTypes[key]
                    }
                break
                case 'arrayOf':
                case 'instanceOf':
                case 'objectOf':
                case 'oneOf':
                case 'oneOfType':
                case 'shape':
                    if (settings.isRequired) {
                        // example: arrayOf(string)
                        Types[key] = function (...arg) {
                            return PropTypes[key].apply(PropTypes, arg).isRequired
                        }
                    }
                    else {
                        Types[key] = PropTypes[key]
                    }
                break
                default:
                // exact
                // checkPropTypes
                // PropTypes
                Types[key] = PropTypes[key]
            }
        })
        output = Types
    }
    else {
        output = PropTypes
    }
    output.checkPropTypes = null
    output.checkPropTypes = proxyCheckPropTypes
    output.check = proxyCheckPropTypes
    return output
}
module.exports = createPropType
