import { makeExecutableSchema } from 'graphql-tools';
import fetch from 'node-fetch';
import Base from './Base';
import FaqsPage from './faqsPage/schema';
import HomePage from './homePage/schema';

// lets connect up the backend
const backEndEndpoint = "http://localhost:5000/api/v1";

const resolvers = {
  Query: {
    FaqsPage: (obj, args, context, info) => {
      const { CmsPosts } = context.services
      return CmsPosts.getPosts()
      .then(posts => posts.faqs.map((f, i) => ({ id: i+1, title: f.title, body: f.body })))
    },
    HomePage: (obj, args, context, info) => {
      const { CmsPosts } = context.services
      return CmsPosts.getPosts()
      .then(posts => posts.homepage);
    },
  },
  Mutation: {
    NewFaq: (obj, args, context, info) => {
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