// IMPORT DB
const data = require('../files/data.json')

exports.handler = async (event, context) => {
    return {
        statusCode: 200,

        // MUST RETURN A STRING BODY
        body: JSON.stringify(data)
    }
}