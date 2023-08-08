const express = require('express')
const path = require('path')

const app = express()
const port = process.env.PORT || 3000

// Serve static files from the root directory
app.use(express.static(__dirname))

// Define a route to serve the index.html file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'styles', 'index.html'))
})

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})
