import Base from '../base';

const FaqsPage = `
  type Faq {
    id: ID
    title: String
    body: String
  }
  extend type Query {
    FaqsPage: [Faq]
  }
  extend type Mutation {
    NewFaq(id: ID, title: String, body: String):Faq
  }
`;

export default () => [FaqsPage, Base];