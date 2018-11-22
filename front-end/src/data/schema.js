import fs from 'fs';
import path from 'path';
import { printSchema } from 'graphql';
import { makeExecutableSchema } from 'graphql-tools';

/* Type Defs */
import FaqsPageTypes from '../faqsPage/typeDefs';
import HomePageTypes from '../homePage/typeDefs';
import BaseTypes from "./baseTypeDefs";

/* Resolvers */
import {
  Query as FaqsPageQueries,
  Mutation as FaqsPageMutations,
} from "../faqsPage/resolvers";

import {
   Query as HomePageQueries,
} from "../homePage/resolvers";

/* Relay Node Resolver */
const NodeResolver = {
  node: (obj, args, context, info) => {
    console.log(obj);
    const { CmsPosts } = context.services
    return CmsPosts.getPosts()
    // Add id's to make working with Faq's easier
    .then(posts => {
      // I should make the add id to faqs a function
      let faqs = posts.faqs.map((f, i) => ({ id: i+1, title: f.title, body: f.body }))
      return faqs[faqs.findIndex(f => f.id == args.id)]
    })
  }
}
// Build the schema
const graphqlSchemaObj = makeExecutableSchema({
  typeDefs: [BaseTypes, FaqsPageTypes, HomePageTypes],
  resolvers: {
    Query: {
      ...NodeResolver,
      ...FaqsPageQueries,
      ...HomePageQueries,
    },
    Mutation: {
        ...FaqsPageMutations,
    },
    Node: {

    },
    Faq: {
      __isTypeOf: (value) => !!value.id
    }
  }, 
  logger: { log: e => console.log(e) }
})

// Export the schema.graphQl (for relay)
const schemaPath = path.resolve(__dirname, '././schema.graphql');
fs.writeFileSync(schemaPath, printSchema(graphqlSchemaObj));

export default graphqlSchemaObj