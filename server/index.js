require('dotenv').config()
const express = require('express')
const app = express()
const massive = require('massive')

const ctrl = require('./controller')
const {CONNECTION_STRING} = process.env
const SERVER = 3232

app.use(express.json())

massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
}).then(db => {
    app.set('db', db);
    console.log('db connected')
})

app.get('/api/inventory', ctrl.getInventory)
app.post('/api/product', ctrl.createProduct)
app.delete('/api/delete/:id', ctrl.deleteProduct)
app.put('/api/product/:id', ctrl.updateProduct)

app.listen( SERVER, () => {
    console.log(`Server running on port ${SERVER}`)
})