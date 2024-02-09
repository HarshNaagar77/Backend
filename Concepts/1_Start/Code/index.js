// Require the dotenv module to load environment variables from a .env file
require('dotenv').config()

// Import the Express module and create an instance of an Express application
const express = require('')
const app = express()

// Define a route for the root path ('/') that sends the message 'He llo World!' as the response
app.get('/', (req, res) => {
  res.send('Hello World!')
})

// Define a route for the path '/login' that sends the message 'This is a login page :)' as the response
app.get("/login" , (req ,res)=>{
    res.send("This is a login page :)") 
})

// Start the Express application listening for requests on the port specified in the environment variable PORT
app.listen(process.env.PORT , () => {
  console.log(`This app is listening on port ${process.env.PORT}`)
})