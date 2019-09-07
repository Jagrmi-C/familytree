const express = require('express')
const app = express()
const port = process.env.PORT || 5000

const test_routes = require('./test_routes')

app.get('/', (req, res) => res.send('Hello World!'))
app.get('/', (req, res) => res.send() )
app.use('/j', test_routes)


app.listen(port, () => console.log(`Example app listening on port ${port}!`))
