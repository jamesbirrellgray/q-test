import Base from '../base';

const FaqsPage = `
  extend type Query {
    FaqsPage: [Faq]
  }
  type Faq {
    id: ID
    title: String
    body: String
  }
`;

export default () => [FaqsPage, Base];