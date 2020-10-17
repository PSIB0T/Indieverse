const express = require('express');
const expressGraphQL = require('express-graphql');
var { graphqlHTTP } = require('express-graphql');

const {schema} = require('./server_prod/graphql/index');

const {prepopulate} = require('./server_prod/mongooes/prepopulate')

prepopulate();

const config = require('./config');

const app = express();
// Run the app by serving the static files
// in the dist directory
app.use(express.static(__dirname + '/dist'));

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));
// Start the app by listening on the default
// Heroku port
app.listen(config.port, () => {
  console.log("Server is running!");
});
