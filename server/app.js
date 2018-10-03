const express = require('express')
const graphqlHTTP = require('express-graphql')
const schema = require('./schema/schema')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()

// allow cross-origin requests
app.use(cors())

// connect to mlab database
// https://mlab.com/databases/
// make sure to replace my db string & creds with your own
mongoose.connect('mongodb://gqluser:gql2018@ds121343.mlab.com:21343/gql-test')
mongoose.connection.once('open', () => {
  console.log('conneted to database')
})

// bind express with graphql
app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
  })
)

// set port
const port = 4000
app.listen(port, () => {
  console.log(`now listening for requests on port ${port}`)
})
