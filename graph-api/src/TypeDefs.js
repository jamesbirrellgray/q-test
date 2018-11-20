import FaqsPage from './faqsPage/typeDefs';
import HomePage from './homePage/typeDefs';

const Base = `
type Query {
    dummy: Boolean
}
type Mutation {
    dummy: Boolean
}
scalar Url
`
export default () => [Base, FaqsPage, HomePage];