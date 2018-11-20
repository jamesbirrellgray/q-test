import FaqsPage from './faqsPage/typeDefs';
import HomePage from './homePage/typeDefs';

const Base = `
type Query {
    dummy: Boolean
}
type Mutation {
    dummy: Boolean
}
type Directive {
    dummy: Boolean
}
scalar Url
`;

export const typeDefs = [Base, FaqsPage, HomePage];