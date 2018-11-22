const FaqsPageTypes = `
  type Faq implements Node {
    id: ID!
    title: String
    body: String
    isTypeOf: Faq
  }
  extend type Query {
    Faqs: [Faq]
  }
  extend type Query {
    Faq(id: ID!): Faq
  }
  extend type Mutation {
    UpdateFaq(id: ID!, title: String, body: String):Faq
  }
  extend type Mutation {
    CreateFaq(input: CreateFaqInput!): CreateFaqPayLoad
  }
  input CreateFaqInput {
    id: ID!
    title: String!
    body: String!
    clientMutationId: String!
  }
  
  type CreateFaqPayLoad {
    faq: Faq
    clientMutationId: String!
  }
`;

export default  () => [FaqsPageTypes]