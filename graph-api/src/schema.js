import fs from 'fs';
import path from 'path';
import {printSchema} from 'graphql';
import { makeExecutableSchema } from 'graphql-tools';
import { default as resolvers } from './Resolvers';
import {typeDefs} from './TypeDefs';


const graphqlSchemaObj = makeExecutableSchema({
  typeDefs,
  resolvers,
  logger: { log: e => console.log(e) }
})

const schemaPath = path.resolve(__dirname, '././schema.graphql');
fs.writeFileSync(schemaPath, printSchema(graphqlSchemaObj));

export default graphqlSchemaObj