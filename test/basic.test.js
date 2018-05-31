import { expect } from 'chai';

var Types = require('../lib/index')({
    isRequired: true,
    location: 'JSON',
    mdouleName: 'Response'
})
var notRrequiredTypes = require('../lib/index')({isRequired: false})
var {
    array, bool, number, object, string, symbol,
    any, element, node,
    arrayOf, instanceOf, objectOf,
    oneOf, oneOfType, shape
} = Types
describe('basic', () => {
    it('simple', (done) => {
        var errorArr = []
        console.error
        console.error = function (msg) {
            errorArr.push(msg)
        }
        setTimeout(function () {
            expect(
                JSON.stringify(errorArr)
            ).to.equal('["Warning: Failed JSON type: Invalid JSON `age` of type `string` supplied to `Response`, expected `number`."]')
            done()
        }, 200)
        Types.check(
            {
                // or name: Types.setring
                name: string,
                age: number
            },
            {
                name: 'nimo', // pass
                age: '26', // fail
                weight: notRrequiredTypes.age
            }
        )
    })
    it('full data', (done) => {
        var errorArr = []
        console.error = function (msg) {
            errorArr.push(msg)
        }
        setTimeout(function () {
            expect(
                JSON.stringify(errorArr)
            ).to.equal('["Warning: Failed data type: The data `data.test1` is marked as required in `ajax`, but its value is `undefined`."]')
            done()
        }, 200)
        Types.check(
            {
                data: shape({
                    test1: string,
                    test2: notRrequiredTypes.string,
                    username: string,
                    age: number,
                    domains: arrayOf(string),
                    projects: arrayOf(
                        shape({
                            name: string,
                            url: string
                        })
                    ),
                    currentProject: shape({
                        name: string,
                        url: string
                    })
                })
            },
            {
                "status": "pass",
                "data": {
                    "username": "nimo",
                    "nikename": "NIMO",
                    "age": 26,
                    "domains": [
                        "https://onface.live",
                        "http://onface.github.io"
                    ],
                    "projects": [
                        {
                            "name": "echo",
                            "url": "https://github.com/onface/echo.onface.live"
                        },
                        {
                            "name": "better-api",
                            "url": "https://github.com/onface/better-api"
                        }
                    ],
                    "currentProject": {
                        "name": "echo",
                        "url": "https://github.com/onface/echo.onface.live"
                    }
                }
            }
            ,'data', 'ajax'
        )
    })
})
