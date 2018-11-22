const BaseTypes = `
  interface Node {
    id: ID!
  }
  type Query {
    node(id: ID!): Node
  }
  type Mutation {
      dummy: Boolean
  }
  type Directive {
      dummy: Boolean
  }
  scalar Url
`;

export default BaseTypes