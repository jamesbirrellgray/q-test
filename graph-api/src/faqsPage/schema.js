const FaqsPage = `
  type Faq {
    id: ID
    title: String!
    body: String!
  }
  extend type Query {
    FaqsPage: [Faq]
  }
  extend type Mutation {
    UpdateFaq(id: ID, title: String, body: String):Faq
  }
`;

export default () => [FaqsPage];