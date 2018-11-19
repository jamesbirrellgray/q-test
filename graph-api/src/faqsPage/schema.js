const FaqsPage = `
  type Faq {
    id: ID
    title: String
    body: String
  }
  type FaqsPage {
    posts: String
  }
  extend type Query {
    FaqsPage: [Faq]
  }
  extend type Mutation {
    NewFaq(id: ID, title: String, body: String):Faq
  }
`;

export default () => [FaqsPage];