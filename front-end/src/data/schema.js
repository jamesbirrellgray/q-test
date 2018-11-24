import fs from 'fs';
import path from 'path';

import {
  GraphQLBoolean,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  printSchema,
} from 'graphql';

import {
  connectionArgs,
  connectionDefinitions,
  connectionFromArray,
  cursorForObjectInConnection,
  fromGlobalId,
  globalIdField,
  mutationWithClientMutationId,
  nodeDefinitions,
  toGlobalId,
} from 'graphql-relay';


/* Relay Node */

const {nodeInterface, nodeField} = nodeDefinitions(
  globalId => {
    const {type, id} = fromGlobalId(globalId);
    if (type === 'Faq') {
      return getFaq(id);
    } 
    return null;
  },
  obj => {
    if (obj === 'Faq') {
      return GraphQLFaq;
    }
    return null;
  },
);

/* FaqsPage Schema ++++++++++++++++++++++++++++++++++++++++++++  */

/* Import FaqsPage data */
import {
  getFaqs,
  getFaq,
  updateFaq,
  deleteFaq
} from '../faqsPage/data';

/* Faq */

const GraphQLFaq = new GraphQLObjectType({
  name: 'Faq',
  fields: {
    id:  globalIdField('Faq'),
    title: {
      type: GraphQLString,
      resolve: obj => obj.title,
    },
    body: {
      type: GraphQLString,
      resolve: obj => obj.body,
    }
  },
  interfaces: [nodeInterface],
});

const Query = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    Faqs: {
      type: new GraphQLList(GraphQLFaq),
      resolve: () => getFaqs(),
    },
    node: nodeField
  })
});


const GraphQLUpdateFaqMutation = mutationWithClientMutationId({
  name: 'UpdateFaq',
  inputFields: {
    id: {type: new GraphQLNonNull(GraphQLID)},
    title: {type: new GraphQLNonNull(GraphQLString)},
    body: {type: new GraphQLNonNull(GraphQLString)},
  },
  outputFields: {
    Faq: {
      type: GraphQLFaq,
      resolve: obj => getFaq(obj.id),
    },
  },
  mutateAndGetPayload: ({id, title, body}) => {
    const localFaqId = fromGlobalId(id).id;
    id = localFaqId;
    return updateFaq({id, title, body});
  },
});

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    updateFaq: GraphQLUpdateFaqMutation,
  },
});

export const schema = new GraphQLSchema({
  query: Query,
  mutation: Mutation,
  logger: { log: e => console.log(e) }
});

// Prints the schema 
const schemaPath = path.resolve(__dirname, './schema.graphql');
fs.writeFileSync(schemaPath, printSchema(schema));