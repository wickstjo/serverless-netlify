// IMPORTS
const axios = require('axios')

// API ENDPOINT
const endpoint = 'http://localhost:8888/api/'

async function foo(func) {
    try {
        
        // REQUEST DATA FROM API ENDPOINT
        const response = await axios.get(endpoint + func)
        
        // PRINT STATUS CODE & DATA
        console.log('status code:\t', response.status)
        console.log('data:\t\t', response.data)

    // CATCH ANY ERRORS
    } catch(error) {
        console.log('status code:\t', error.response.status)
        console.log('data:\t\t', error.response.data)
    }
}

// FETCH ENTIRE DB OBJECT
foo('everything')

// FETCH ALL BOOKS
foo('books')

// FETCH SINGLE BOOK BY ID
foo('book?id=2')

// FETCH A BOOK THAT DOES NOT EXIST
foo('book?id=500')