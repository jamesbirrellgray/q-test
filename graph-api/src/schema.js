import { makeExecutableSchema } from 'graphql-tools';
import fetch from 'node-fetch';
import Base from './base';
import FaqsPage from './faqsPage/schema';
import HomePage from './homePage/schema';

// lets connect up the backend
const backEndEndpoint = "http://localhost:5000/api/v1";

const resolvers = {
  Query: {
    FaqsPage: (obj, args, context, info) => {
      return context = fetch(`${backEndEndpoint}/posts`)
      .then(res => res.json())
      .then(json => json.faqs.map((f, i) => ({ id: i+1, title: f.title, body: f.body }))); // There must be a better way todo this ... I will read up
    },
    HomePage: () => {
      return fetch(`${backEndEndpoint}/posts`)
      .then(res => res.json())
      .then(json => json.homepage);
    },
  },
  Mutation: {
    NewFaq: (_, args) => {
      const faq = {
        id: `${idCount++}`,
        title: args.title,
        body: args.body,
      }
      fetch(`${backEndEndpoint}/posts`, {
        method: 'post',
        body:    JSON.stringify(body),
        headers: { 'Content-Type': 'application/json' },
      })
      .then(res => res.json())
      .then(json => console.log(json));
    }
  },
};

export default makeExecutableSchema({
  typeDefs: [Base, FaqsPage, HomePage],
  resolvers,
  logger: { log: e => console.log(e) }
});