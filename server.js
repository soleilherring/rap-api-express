const express = require('express')
const app = express() //using epxress and storing as app
const PORT = 8000
const rappers = {
    '21 savage': {
        'age': 29,
        'birthname': 'Sheya bin Abraham-joseph',
        'birthlocation': 'London, England'
    },
    'chance the rapper': {
        'age': 29,
        'birthname': 'Chancelor Bennet',
        'birthlocation': 'Chicago, Illinois'
    },
    'dylan': {
        'age': 29,
        'birthame': 'Dylan',
        'birthlocation': 'Dylan'
    }
}

// get request for main page
app.get('/', (request, response)=>{
    // got a req on the main file and will send file
    // dirname says, wherever server js is located start looking there
    response.sendFile(__dirname + '/index.html')
})

// get request for /api
// rappername is a query parameter
app.get('/api/:rapperName', (request, response)=>{
    const rapperName = request.params.rapperName.toLowerCase()
    // if this rapper query parameter exists, return their info

    console.log(rappers[rapperName])
    if(rappers[rapperName]){
        response.json(rappers[rapperName])
    } else {
        response.json(rappers['dylan'])
    }
})

app.listen(PORT, ()=> {
    console.log(`The Server is Running on ${PORT}`)
})