const express = require('express')
const app = express()
const port = 587

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
})