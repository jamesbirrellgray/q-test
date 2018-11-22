const HomePageTypes = `
  extend type Query {
    HomePage: HomePage
  }
  type HomePage {
    heading: String
    subheading: String
    heroImageUrl: Url
  }
`;
export default () => [HomePageTypes];