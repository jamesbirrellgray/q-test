const fs = require('fs');
const path = require('path');
const express = require('express');
const graphqlHTTP = require('express-graphql');
const { makeExecutableSchema } = require('graphql-tools');
const fetch = require('node-fetch');

const schemaFile = path.join(__dirname, 'schema.graphql');
const typeDefs = fs.readFileSync(schemaFile, 'utf8');

// lets connect up the backend

const backEndEndpoint = "http://localhost:5000/api/v1";

const resolvers = {
  Query: {
    FaqsPage: () => {
      return fetch(`${backEndEndpoint}/posts`)
      .then(res => res.json())
      .then(json => json.faqs);
    },
  },
};

const schema = makeExecutableSchema({ typeDefs, resolvers });
var app = express();
app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true,
}));
app.listen(4000);
console.log('Running a GraphQL API server at localhost:4000/graphql');