import { makeExecutableSchema } from 'graphql-tools';
import fetch from 'node-fetch';
import Base from './base';
import FaqsPage from './faqsPage/schema';
import HomePage from './homePage/schema';

// lets connect up the backend
const backEndEndpoint = "http://localhost:5000/api/v1";

const resolvers = {
  Query: {
    FaqsPage: () => {
      return fetch(`${backEndEndpoint}/posts`)
      .then(res => res.json())
      .then(json => json.faqs);
    },
    HomePage: () => {
      return fetch(`${backEndEndpoint}/posts`)
      .then(res => res.json())
      .then(json => json.homepage);
    },
  },
};

export default makeExecutableSchema({
  typeDefs: [Base, FaqsPage, HomePage],
  resolvers,
  logger: { log: e => console.log(e) }
});