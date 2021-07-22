// IMPORT DB
const data = require('../files/data.json')

exports.handler = async (event, context) => {

    // DESTRUCTURE THE REQUESTED ID
    const { id } = event.queryStringParameters

    // DEFAULT RESPONSE OBJECT
    const response = {
        statusCode: 200,
        body: 'an id was not provided'
    }

    // IF AN ID WAS PROVIDED
    if (id) {

        // LOCATE THE BOOKS DETAILS
        const details = data.books.find(entry => entry.id == id)
        
        // IF THE BOOK ID EXISTS
        if (details) {
            response.status = 200
            response.body = JSON.stringify(details)
        
        // OTHERWISE
        } else {
            response.status = 204
            response.body = 'this book id does not exist'
        }
    }

    // RETURN WHATEVER THE RESPONSE OBJECT CONTAINS
    return response
}