import { makeExecutableSchema } from 'graphql-tools';
import { default as resolvers } from './Resolvers'
import typeDefs from './TypeDefs'

export default makeExecutableSchema({
  typeDefs,
  resolvers,
  logger: { log: e => console.log(e) }
})