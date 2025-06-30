const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello Coders!')
})

app.get('/get-customer-details', (req, res) => {
  res.send('Hello Customer!')
})

app.get('/get-customer-details-by-id/:id', (req, res) => {
    const id = req.params.id
  res.send(`Hello Customer with ID: ${id}!`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
